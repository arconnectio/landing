import Application, { IApplication } from "~/components/landing/Application";
import { Description, Title } from "~/components/content/Text";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import { GetStaticProps } from "next";
import Head from "~/components/Head";
import { promises as fs } from "fs";
import Nav from "~/components/Nav";
import path from "path";

export default function Apps({ applications }: Props) {
  return (
    <>
      <Head title="Applications - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Applications</Title>
          <Spacer y={1} />
          <Description>
            Here is a list of applications that support ArConnect. Remember this
            might not be a complete list, as it is community maintained. You can
            add your application to the list by{" "}
            <a
              href="https://github.com/arconnectio/landing/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              creating an issue
            </a>
            .
          </Description>
        </Section>
        <AppsSection>
          {applications.map((app, i) => <Application {...app} key={i} full />)}
        </AppsSection>
        <Background />
      </Main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // apps file location
  const appsFileLoc = path.join(process.cwd(), "./public/apps/apps.json");

  // read file
  const fileContents = await fs.readFile(appsFileLoc, "utf8");

  return {
    props: {
      applications: JSON.parse(fileContents)
    }
  };
};

const Main = styled.main`
  position: relative;
`;

const AppsSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  gap: 1.9rem;
  padding-bottom: 3.5rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

interface Props {
  applications: IApplication[];
}
