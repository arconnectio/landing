import Background from "~/components/landing/Background";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Branding() {
  return (
    <>
      <Head title="ArConnect Branding - Arweave Wallet" />
      <Nav />
      <Main>
        <Section>
          <Title>
            Branding
          </Title>
          <Spacer y={1} />
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nesciunt quas non ipsam et, distinctio fugiat quae dolorum sequi facilis numquam aperiam eos nihil. Quod molestiae numquam quibusdam sequi asperiores.
          </Description>
        </Section>
        <Section>
          <Subtitle>
            Logo
          </Subtitle>
          <Spacer y={2} />
          <Logos>
            <LogoWrapper>
              <LogoImage src="/logos/horizontal-themed.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/horizontal-themed.svg">
                  .svg
                </DownloadLink>
                <DownloadLink href="/logos/horizontal-themed.png">
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper color="255, 255, 255">
              <LogoImage src="/logos/horizontal-black.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/horizontal-black.svg" color="0, 0, 0">
                  .svg
                </DownloadLink>
                <DownloadLink href="/logos/horizontal-black.png" color="0, 0, 0">
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper color="0, 0, 0">
              <LogoImage src="/logos/horizontal-white.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/horizontal-white.svg" color="255, 255, 255">
                  .svg
                </DownloadLink>
                <DownloadLink href="/logos/horizontal-white.png" color="255, 255, 255">
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper>
              <LogoImage src="/logos/themed.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/themed.svg">
                  .svg
                </DownloadLink>
                <DownloadLink href="/logos/themed.png">
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper color="255, 255, 255">
              <LogoImage src="/logos/black.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/black.svg" color="0, 0, 0">
                  .svg
                </DownloadLink>
                <DownloadLink href="/logos/black.png" color="0, 0, 0">
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper color="0, 0, 0">
              <LogoImage src="/logos/white.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/white.svg" color="255, 255, 255">
                  .svg
                </DownloadLink>
                <DownloadLink href="/logos/white.png" color="255, 255, 255">
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
          </Logos>
        </Section>
        <Background />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

const Section = styled.section`
  padding: 3rem 10vw;

  @media screen and (max-width: 720px) {
    padding: 2rem 7vw;
  }
`;

const Title = styled.h1`
  font-size: 3.35rem;
  font-weight: 650;
  color: rgb(${(props) => props.theme.accent});
  margin: 0;
  line-height: 1.25em;
`;

const Description = styled.p`
  font-size: 1.05rem;
  font-weight: 550;
  text-align: justify;
  margin: 0;
  color: rgb(${props => props.theme.secondaryText});
  line-height: 1.55em;
  width: 42vw;

  @media screen and (max-width: 720px) {
    width: auto;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.65rem;
  font-weight: 650;
  color: rgb(${props => props.theme.secondaryText});
  line-height: 1.1em;
  margin: 0;
`;

const Logos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

const LogoWrapper = styled.div<{ color?: string; }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  background-color: rgba(${props => props.color || props.theme.accent}, ${props => !props.color ? ".2" : "1"});
  padding: 4.2rem 0;
`;

const DownloadLinks = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: .65rem;
  bottom: .5rem;
  right: .85rem;
`;

const DownloadLink = styled.a.attrs({
  download: true
})<{ color?: string; }>`
  color: rgb(${props => props.color || props.theme.accent});
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all .23s ease-in-out;

  &:hover {
    opacity: .8;
  }
`;

const LogoImage = styled.img.attrs({
  alt: "ArConnect logo",
  draggable: false
})`
  height: 3.5rem;
  user-select: none;
`;
