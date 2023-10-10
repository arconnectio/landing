import { Paragraph, Date, ParagraphTitle, DateBlock } from "~/components/content/Text";
import Section from "~/components/content/Section";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import {
  CalendarIcon,
  ArrowUpRightIcon,
  ArrowDownIcon
} from "@iconicicons/react";
import Link from "next/link";
import BlogTitle from "~/components/blog/BlogTitle";
import NavigationIcon from "~/components/blog/NavigationIcon";
import { load } from "outstatic/server"
import dayjs from "dayjs"

export default function Blog({ all }: Props) {
  return (
    <>
      <Head title="Blog - ArConnect Arweave Wallet" />
      <Nav />
      <main>
        <Wrapper>
          <Section>
            <Title>Blog</Title>
            <Spacer y={1} />
            <FeaturedTiles>
              <Column style={{ flex: "6" }}>
                <Paragraph>
                  Read the latest news and information about ArConnect and
                  discover all that we are working on.
                </Paragraph>
                <Entry
                  href={`/blog/${all[0].slug}`}
                  backgroundColor={all[0].themeColor}
                  height="434px"
                >
                  <DateTitleContainer>
                    <div>
                      <DateBlock>
                        <CalendarIcon />
                        {dayjs(all[0].publishedAt).format("DD MMM, YYYY")}
                      </DateBlock>
                    </div>
                    <BlogTitle
                      title={all[0].title}
                    />
                  </DateTitleContainer>
                  <Thumbnail src={all[0].transparentThumbnail} alt="Thumbnail" draggable={false} />
                  <NavigationIcon />
                </Entry>
              </Column>
              <Column style={{ flex: "4" }}>
                <Entry
                  href={`/blog/${all[1].slug}`}
                  backgroundColor={all[1].themeColor}
                >
                  <Row>
                    <DateBlock>
                      <CalendarIcon />
                      {dayjs(all[1].publishedAt).format("DD MMM, YYYY")}
                    </DateBlock>
                    <NavigationIcon />
                  </Row>
                  <BlogTitle title={all[1].title} />
                  <Thumbnail src={all[1].transparentThumbnail} alt="Thumbnail" draggable={false} top="37%" />
                </Entry>
                <Entry
                  href="#all"
                  height="114px"
                  backgroundColor="rgba(171, 154, 255, 0.2)"
                  justify="center"
                >
                  <BlogTitle title="Read more of our blogs" limit={16} />
                </Entry>
              </Column>
            </FeaturedTiles>
          </Section>
          {all.length > 2 && (
            <Section id="all">
              <ParagraphTitle
                style={{ fontSize: "3.125rem", paddingBottom: "41.6px" }}
              >
                All Posts
              </ParagraphTitle>
              {all.slice(2).map((blog, i) => (
                <div key={i}>
                  <Entry
                    href={`/blog/${blog.slug}`}
                    backgroundColor={blog.themeColor}
                    height="434px"
                  >
                    <AllPostContent>
                      <DateTitleContainer flexDirection="column">
                        <DateBlock>
                          <CalendarIcon />
                          {dayjs(blog.publishedAt).format("DD MMM, YYYY")}
                        </DateBlock>
                        <BlogTitle title={blog.title} />
                      </DateTitleContainer>
                      <Thumbnail src={blog.transparentThumbnail} alt="Thumbnail" draggable={false} />
                      <NavigationIcon alt />
                    </AllPostContent>
                  </Entry>
                  <Spacer y={4} />
                </div>
              ))}
            </Section>
          )}
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const db = await load();
  const all = await db
    .find<Blog>({
      collection: "blogs",
    })
    .project([
      "publishedAt",
      "title",
      "slug",
      "transparentThumbnail",
      "themeColor"
    ])
    // @ts-expect-error
    .sort([{ publishedAt: -1 }])
    .limit(3)
    .toArray();

  return {
    props: { all }
  };
}

export const Wrapper = styled.main`
  // max-width: 1518px;
  margin: 0 auto;
`;

const Thumbnail = styled.img<{ top?: string; }>`
  position: absolute;
  top: ${props => props.top || "55%"};
  left: 50%;
  max-width: 80%;
  max-height: 80%;
  user-select: none;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

const DateTitleContainer = styled.div<{ flexDirection?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection || "row"};
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const AllPostContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.accent});
  margin: 0;
  line-height: 1.25em;

  @media screen and (max-width: 720px) {
    margin-top: 4rem;
  }
`;

const Entry = styled(Link)<{
  backgroundColor?: string;
  height?: string;
  justify?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: inherit;
  color: inherit;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  padding: 20px;
  height: ${(props) => props.height || "350px"};
  border-radius: 40px;
  background: ${(props) => props.backgroundColor || "transparent"};

  &:visited {
    color: inherit;
  }
`;

const FeaturedTiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4.375rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

interface Blog {
  publishedAt: string;
  title: string;
  slug: string;
  transparentThumbnail: string;
  themeColor: string;
}

interface Props {
  all: Blog[];
}