import { Paragraph, Date, ParagraphTitle, DateBlock } from "~/components/content/Text";
import Section from "~/components/content/Section";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Image from "next/image";
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
  const altSVG = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg width="365" height="147" viewBox="0 0 365 147" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M118 146H19C9.05888 146 1 137.941 1 128V19C1 9.05888 9.05887 1 19 1H346C355.941 1 364 9.05888 364 19V43.3836C364 53.3247 355.941 61.3836 346 61.3836H337.289C327.347 61.3836 319.289 69.4424 319.289 79.3836V84.6986C319.289 94.6398 311.23 102.699 301.289 102.699H154C144.059 102.699 136 110.757 136 120.699V128C136 137.941 127.941 146 118 146Z" fill="white" stroke="white"/></svg>'
  )}`;
  const arconnectSVG = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg width="229" height="100" viewBox="0 0 229 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M149 77.1875V81C149 90.9411 140.941 99 131 99H19C9.05888 99 1 90.9472 1 81.0061V18.9964C1 9.05532 9.05888 1 19 1H210C219.941 1 228 9.05887 228 19V41.1875C228 51.1286 219.941 59.1875 210 59.1875H167C157.059 59.1875 149 67.2464 149 77.1875Z" fill="white" stroke="white"/></svg>'
  )}`;

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
                      background={altSVG}
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
                  <DateBlock>
                    <CalendarIcon />
                    {dayjs(all[1].publishedAt).format("DD MMM, YYYY")}
                  </DateBlock>
                  <BlogTitle
                    alternative
                    width="250px"
                    background={arconnectSVG}
                    title={all[1].title}
                    icon={<ArrowUpRightIcon />}
                  />
                  <Thumbnail src={all[1].transparentThumbnail} alt="Thumbnail" draggable={false} />
                </Entry>
                <Entry
                  href="#all"
                  height="114px"
                  backgroundColor="rgba(171, 154, 255, 0.2)"
                  justify="center"
                >
                  <BlogTitle
                    title="Read more of our blogs"
                    alternative
                    width="215px"
                    icon={<ArrowDownIcon />}
                  />
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
                        <BlogTitle
                          alternative
                          background={arconnectSVG}
                          title={blog.title}
                          icon={<ArrowUpRightIcon />}
                          width="230px"
                        />
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

const Thumbnail = styled.img`
  position: absolute;
  top: 55%;
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