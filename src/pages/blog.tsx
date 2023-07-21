import { Paragraph, Date } from "~/components/content/Text";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Image from "next/image";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import { CalendarIcon, ArrowUpRightIcon } from "@iconicicons/react";

export default function Branding() {
  return (
    <>
      <Head title="Blog - ArConnect Arweave Wallet" />
      <Nav />
      <main>
        <Wrapper>
          <Section extraSpace>
            {/* FLEX Section */}
            <Title>Blog</Title>
            <Spacer y={1} />

            <FeaturedTiles>
              <Column>
                <Paragraph>
                  Read the latest news and information about ArConnect and
                  discover all that we are working on.
                </Paragraph>
                <Entry backgroundColor="rgba(35, 117, 239, 0.1)" height="474px">
                  <Date>
                    <CalendarIcon />
                    <div>Jul 7, 2023</div>
                  </Date>
                </Entry>
              </Column>
              <Column>
                <Entry backgroundColor="rgba(254, 2, 48, 0.20);">
                  <Date>
                    <CalendarIcon />
                    <div>Jul 1, 2023</div>
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
                  <TitleContainer>
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
                  height="154px"
                  backgroundColor="rgba(171, 154, 255, 0.2)"
                >
                  <TitleContainer>
                    <BlogTitle>Read more of</BlogTitle>
                    <BlogTitle>our blogs</BlogTitle>
                  </TitleContainer>
                </Entry>
              </Column>
            </FeaturedTiles>
          </Section>
          <Background />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

const Wrapper = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleContainer = styled.div<{ background?: string }>`
  font-size: 1.875rem;
  border-radius: 20px 20px 20px 0;
  padding: 7px 14px;
  max-width: max-content;
  background-color: #fff;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="255" height="100" viewBox="0 0 255 100" fill="none"><path d="M229 71.6875V81C229 90.9411 220.941 99 211 99H19C9.05887 99 1 90.9472 1 81.0061V18.9964C1 9.05532 9.05888 1 19 1H236C245.941 1 254 9.05887 254 19V46.6875C254 53.5911 248.404 59.1875 241.5 59.1875C234.596 59.1875 229 64.7839 229 71.6875Z" fill="white" stroke="white"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const BlogTitle = styled.div`
  font-size: 1.875rem;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  max-width: max-content;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.accent});
  margin: 0;
  line-height: 1.25em;

  @media screen and (max-width: 720px) {
    margin-top: 4rem;
  }
`;

const Entry = styled.div<{ backgroundColor?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  min-width: 350px;
  // height: 350px;
  height: ${(props) => props.height || "350px"};
  border-radius: 40px;
  background: ${(props) => props.backgroundColor || "transparent"};
  // background: rgba(254, 2, 48, 0.2);
`;

const FeaturedTiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4.375rem;
`;
