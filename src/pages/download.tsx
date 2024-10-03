import Background from "~/components/landing/Background";
import YouTubeEmbed from "react-youtube-embed";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Mobile from "~/components/landing/Mobile";
import Browsers from "~/components/landing/Browsers";
import { Gradient } from "~/components/landing/Gradient";

export default function Home() {
  return (
    <>
      <Head title="Download - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <TitleSection>
          <Title>Arconnect Wallet Extension</Title>
          <Spacer y={5} />
          <Subtitle>Download the ArConnect Extension</Subtitle>
          <Spacer y={3} />
          <Browsers />
          <Gradient />
        </TitleSection>
        <Mobile showBackground />
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
  position: relative;
  padding: 7rem 0 7rem;

  @media screen and (max-width: 720px) {
    padding: 7.5rem 0 7rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: rgb(${(props) => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  line-height: normal;
  letter-spacing: -2px;

  @media screen and (max-width: 720px) {
    font-size: 2.35rem;
  }

  span {
    color: #ab9aff;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.secondaryText});
  text-align: center;
  margin: 0;
  line-height: normal;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;

const TutorialSection = styled.section`
  padding: 7rem 0;
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
