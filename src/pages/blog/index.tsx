import { Paragraph, Date, ParagraphTitle } from "~/components/content/Text";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import {
  CalendarIcon,
  ArrowUpRightIcon,
  ArrowDownIcon
} from "@iconicicons/react";

export default function Blog() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/blog/123"); // Replace '123' with the actual ID
  };

  const defaultSVG = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="387" height="142" viewBox="0 0 387 142" fill="none"><path d="M251.207 141H19C9.05887 141 1 132.941 1 123V19C1 9.05888 9.05887 1 19 1H368C377.941 1 386 9.05887 386 19V41.3014C386 51.2425 377.941 59.3014 368 59.3014H347.696C337.755 59.3014 329.696 67.3603 329.696 77.3014V81.1918C329.696 91.1329 321.637 99.1918 311.696 99.1918H287.207C277.265 99.1918 269.207 107.251 269.207 117.192V123C269.207 132.941 261.148 141 251.207 141Z" fill="white" stroke="white"/></svg>'
  )}`;
  const secondarySVG = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="255" height="100" viewBox="0 0 255 100" fill="none"><path d="M229 71.6875V81C229 90.9411 220.941 99 211 99H19C9.05887 99 1 90.9472 1 81.0061V18.9964C1 9.05532 9.05888 1 19 1H236C245.941 1 254 9.05887 254 19V46.6875C254 53.5911 248.404 59.1875 241.5 59.1875C234.596 59.1875 229 64.7839 229 71.6875Z" fill="white" stroke="white"/></svg>'
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
                <Entry backgroundColor="rgba(35, 117, 239, 0.1)" height="434px">
                  <DateTitleContainer>
                    <div>
                      <Date>
                        <CalendarIcon />
                        July 7, 2023
                      </Date>
                    </div>
                    <div>
                      <TitleContainer background={defaultSVG}>
                        <BlogTitle>ArConnect adds support</BlogTitle>
                        <BlogTitle>for Google Accounts</BlogTitle>
                        <BlogTitle>through Othent.</BlogTitle>
                      </TitleContainer>
                    </div>
                  </DateTitleContainer>

                  <ImageContainer>
                    <Image
                      src="/OthentExample.png"
                      alt="Othent logo"
                      draggable={false}
                      width={468}
                      height={151}
                    />
                  </ImageContainer>
                  <NavigationIcon>
                    <WhiteCircle>
                      <ArrowUpRightIcon />
                    </WhiteCircle>
                  </NavigationIcon>
                </Entry>
              </Column>
              <Column style={{ flex: "4" }}>
                <Entry
                  backgroundColor="rgba(254, 2, 48, 0.20);"
                  onClick={handleClick}
                >
                  <Date>
                    <CalendarIcon />
                    Jul 1, 2023
                  </Date>
                  <ImageContainer>
                    <Image
                      src="/placeholder.png"
                      alt="Placeholder logo"
                      draggable={false}
                      width={132}
                      height={102}
                    />
                  </ImageContainer>
                  <TitleContainer background={secondarySVG}>
                    <BlogTitle>A cool new blog</BlogTitle>
                    <BlogTitle>
                      comes here
                      <div className="icon">
                        <ArrowUpRightIcon />
                      </div>
                    </BlogTitle>
                  </TitleContainer>
                </Entry>
                <Entry
                  height="114px"
                  backgroundColor="rgba(171, 154, 255, 0.2)"
                >
                  <TitleContainer
                    background={secondarySVG}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%"
                    }}
                  >
                    <BlogTitle>Read more of</BlogTitle>
                    <BlogTitle>
                      our blogs
                      <div className="icon">
                        <ArrowDownIcon />
                      </div>
                    </BlogTitle>
                  </TitleContainer>
                </Entry>
              </Column>
            </FeaturedTiles>
          </Section>
          <Section>
            <ParagraphTitle
              style={{ fontSize: "3.125rem", paddingBottom: "41.6px" }}
            >
              All Posts
            </ParagraphTitle>

            <Entry backgroundColor="rgba(171, 154, 255, 0.2)" height="434px">
              <AllPostContent>
                <DateTitleContainer flexDirection="column">
                  <Date>
                    <CalendarIcon />
                    July 7, 2023
                  </Date>
                  <TitleContainer background={defaultSVG}>
                    <BlogTitle>ArConnect adds support</BlogTitle>
                    <BlogTitle>for Google Accounts</BlogTitle>
                    <BlogTitle>through Othent.</BlogTitle>
                  </TitleContainer>
                </DateTitleContainer>

                <ImageContainer>
                  <Image
                    src="/PlasmoExample.png"
                    alt="Othent logo"
                    draggable={false}
                    width={521}
                    height={151}
                  />
                </ImageContainer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end"
                  }}
                >
                  <WhiteCircle>
                    <ArrowUpRightIcon />
                  </WhiteCircle>
                </div>
              </AllPostContent>
            </Entry>
            <Spacer y={4} />

            <Entry backgroundColor="rgba(171, 154, 255, 0.2)" height="434px">
              <AllPostContent>
                <DateTitleContainer flexDirection="column">
                  <Date>
                    <CalendarIcon />
                    July 7, 2023
                  </Date>
                  <TitleContainer background={defaultSVG}>
                    <BlogTitle>ArConnect adds support</BlogTitle>
                    <BlogTitle>for Google Accounts</BlogTitle>
                    <BlogTitle>through Othent.</BlogTitle>
                  </TitleContainer>
                </DateTitleContainer>

                <ImageContainer>
                  <Image
                    src="/PlasmoExample.png"
                    alt="Othent logo"
                    draggable={false}
                    width={521}
                    height={151}
                  />
                </ImageContainer>
                <NavigationIcon flexDirection="column">
                  <WhiteCircle>
                    <ArrowUpRightIcon />
                  </WhiteCircle>
                </NavigationIcon>
              </AllPostContent>
            </Entry>
            <Spacer y={1} />
          </Section>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export const Wrapper = styled.main`
  // max-width: 1518px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
`;

const DateTitleContainer = styled.div<{ flexDirection?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection || "row"};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TitleContainer = styled.div<{ background: string }>`
  font-size: 1.875rem;
  border-radius: 20px 20px 20px 0;
  padding: 7px 14px;
  max-width: max-content;

  background: url(${(props) => props.background});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const AllPostContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavigationIcon = styled.div<{ flexDirection?: string }>`
  display: flex;
  justify-content: flex-end;

  flex-direction: ${(props) => props.flexDirection || "row"};
`;

const WhiteCircle = styled.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;

  background-color: white;
  border-radius: 50%;
  padding: 14px;
`;

const BlogTitle = styled.h2`
  margin: 0;
  font-size: 1.875rem;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  white-space: nowrap;
  max-width: max-content;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  a {
    text-decoration: none;
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

const Entry = styled.div<{
  backgroundColor?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: ${(props) => props.height || "350px"};
  border-radius: 40px;
  background: ${(props) => props.backgroundColor || "transparent"};
  cursor: pointer;
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
