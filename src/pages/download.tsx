import Background from "~/components/landing/Background";
import Install from "~/components/landing/Install";
import YouTubeEmbed from "react-youtube-embed";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Home() {
  return (
    <>
      <Head title="Download - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <TitleSection>
          <Title>Download ArConnect</Title>
          <Subtitle>Select your preferred browser</Subtitle>
        </TitleSection>
        <Install title={false} />
        <TutorialSection>
          <VideoWrapper>
            <YouTubeEmbed id="ah1jrMGBUvo" />
          </VideoWrapper>
        </TutorialSection>
        <Spacer y={4} />
        <Background />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

const TitleSection = styled.section`
  padding: 3rem 0 0;

  @media screen and (max-width: 720px) {
    padding: 7.5rem 0 0;
  }
`;

const Title = styled.h1`
  font-size: 3.55rem;
  font-weight: 750;
  color: rgb(${(props) => props.theme.accent});
  text-align: center;
  margin: 0;
  line-height: 1.4em;

  @media screen and (max-width: 720px) {
    font-size: 2.35rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  line-height: 1.1em;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;

const TutorialSection = styled.section`
  padding: 1.5rem 0 3rem;
`;

const VideoWrapper = styled.div`
  width: 45rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 32px;

  @media screen and (max-width: 720px) {
    width: 90vw;
    border-radius: 24px;
  }
`;
