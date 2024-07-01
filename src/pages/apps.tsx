import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import styled from "styled-components";
import { Manrope } from "next/font/google";
import Fuse from "fuse.js";
import { Application as ApplicationInterface, getApps } from "../utils/apps";
import { Title, Description } from "~/components/content/Text";
import Application from "~/components/landing/Application";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Button from "~/components/Button";
import Filter from "~/components/landing/Filter";

const manrope = Manrope({ subsets: ["latin"] });

interface Props {
  applications: ApplicationInterface[];
}

export default function Apps({ applications }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", count: applications.length },
    ...getCategoriesWithCounts(applications)
  ];

  const fuse = useMemo(
    () =>
      new Fuse(applications, {
        keys: ["name", "category", "description"],
        threshold: 0.3
      }),
    [applications]
  );

  const filteredApplications = useMemo(() => {
    let result = applications;

    if (searchQuery) {
      result = fuse.search(searchQuery).map(({ item }) => item);
    }

    if (selectedCategory !== "All") {
      result = result.filter((app) => app.category === selectedCategory);
    }

    return result;
  }, [applications, searchQuery, selectedCategory, fuse]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head title="Applications - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Wrapper>
            <Title>Applications</Title>
            <Description secondary>
              Here is a list of applications that support ArConnect. Remember
              this might not be a complete list, as it is community maintained.
              You can add your application to the list by{" "}
              <a
                href="https://github.com/arconnectio/landing/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                creating an issue
              </a>
              .
            </Description>
            <Spacer y={1} />
            <SearchWrapper onSubmit={handleSearch}>
              <SearchBox>
                <SearchInput
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </SearchBox>
              <Button type="submit" padding="0.75rem 1.5rem">
                Search
              </Button>
            </SearchWrapper>
          </Wrapper>
        </Section>
        <ContentWrapper>
          <FilterRow>
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </FilterRow>
          <AppsSection>
            {filteredApplications.map((app, i) => (
              <ApplicationWrapper key={i}>
                <Application {...app} full />
              </ApplicationWrapper>
            ))}
          </AppsSection>
        </ContentWrapper>
        <Background />
      </Main>
      <Footer />
    </>
  );
}

const getCategoriesWithCounts = (apps: ApplicationInterface[]) => {
  const categoryCounts = apps.reduce((acc, app) => {
    acc[app.category] = (acc[app.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count
  }));
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const applications = await getApps();
  return {
    props: { applications }
  };
};

const Main = styled.main`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchWrapper = styled.form`
  display: flex;
  gap: 1em;
`;

const SearchBox = styled.div`
  background-color: rgb(${(props) => props.theme.background});
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
`;

const SearchInput = styled.input`
  ${manrope.style}
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  z-index: 3;
  width: 500px;
  color: rgb(${(props) => props.theme.secondaryTextv2});

  &::placeholder {
    color: rgba(${(props) => props.theme.secondaryText}, 0.45);
  }

  @media screen and (max-width: 720px) {
    width: 290px;
    padding: 1rem 0.34rem;
    padding-left: calc(0.34rem * 2 + 2.63rem);
    font-size: 0.85rem;
  }

  @media screen and (max-width: 480px) {
    width: auto;
    padding: 0.75rem 0.25rem;
    padding-left: calc(0.25rem * 2 + 1.2rem);
    font-size: 0.8rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1323px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const AppsSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 24px 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ApplicationWrapper = styled.div`
  max-width: 425px;
  width: 100%;
  margin: 0 auto;
`;
