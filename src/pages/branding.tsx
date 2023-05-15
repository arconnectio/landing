import { Description, Subtitle, Title } from "~/components/content/Text";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Branding() {
  return (
    <>
      <Head title="Branding - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Branding</Title>
          <Spacer y={1} />
          <Description>
            You are free to use the following assets for promoting ArConnect on
            websites, articles or any advertising. Please also use one of the
            logos presented on this page for wallet "connect" buttons.
          </Description>
        </Section>
        <Section extraSpace>
          <Subtitle>Logo</Subtitle>
          <Spacer y={2} />
          <Tiles>
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
                <DownloadLink
                  href="/logos/horizontal-black.svg"
                  color="0, 0, 0"
                >
                  .svg
                </DownloadLink>
                <DownloadLink
                  href="/logos/horizontal-black.png"
                  color="0, 0, 0"
                >
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper color="0, 0, 0">
              <LogoImage src="/logos/horizontal-white.png" />
              <DownloadLinks>
                <DownloadLink
                  href="/logos/horizontal-white.svg"
                  color="255, 255, 255"
                >
                  .svg
                </DownloadLink>
                <DownloadLink
                  href="/logos/horizontal-white.png"
                  color="255, 255, 255"
                >
                  .png
                </DownloadLink>
              </DownloadLinks>
            </LogoWrapper>
            <LogoWrapper>
              <LogoImage src="/logos/themed.png" />
              <DownloadLinks>
                <DownloadLink href="/logos/themed.svg">.svg</DownloadLink>
                <DownloadLink href="/logos/themed.png">.png</DownloadLink>
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
          </Tiles>
        </Section>
        <Section extraSpace>
          <Subtitle>Colors</Subtitle>
          <Spacer y={2} />
          <Tiles>
            <Color color="171, 154, 255, 1">
              <ColorName>Accent</ColorName>
              <ColorCode>RGB 171, 154, 255</ColorCode>
            </Color>
            <Color color="171, 154, 255, .2">
              <ColorName color="171, 154, 255">Transparent accent</ColorName>
              <ColorCode color="171, 154, 255">
                RGBA 171, 154, 255, 0.2
              </ColorCode>
            </Color>
            <Color color="0, 0, 0">
              <ColorName>Primary text</ColorName>
              <ColorCode>RGB 0, 0, 0</ColorCode>
            </Color>
            <Color color="73, 68, 100">
              <ColorName>Secondary text</ColorName>
              <ColorCode>RGB 73, 68, 100</ColorCode>
            </Color>
            <Color color="0, 230, 0">
              <ColorName>Success</ColorName>
              <ColorCode>RGB 0, 230, 0</ColorCode>
            </Color>
            <Color color="255, 0, 0">
              <ColorName>Failure</ColorName>
              <ColorCode>RGB 250, 0, 0</ColorCode>
            </Color>
          </Tiles>
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

const Tiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const LogoWrapper = styled.div<{ color?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  background-color: rgba(
    ${(props) => props.color || props.theme.accent},
    ${(props) => (!props.color ? ".2" : "1")}
  );
  padding: 4.2rem 0;
`;

const DownloadLinks = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  bottom: 0.5rem;
  right: 0.85rem;
`;

const DownloadLink = styled.a.attrs({
  download: true
})<{ color?: string }>`
  color: rgb(${(props) => props.color || props.theme.accent});
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img.attrs({
  alt: "ArConnect logo",
  draggable: false
})`
  height: 3.5rem;
  user-select: none;
`;

const Color = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.5rem;
  background-color: rgba(${(props) => props.color});
  height: calc(4.2rem * 2 + 3.5rem - 2rem);
  padding: 1rem 1.25rem;
`;

const ColorName = styled.h3<{ color?: string }>`
  font-size: 1.6rem;
  color: rgb(${(props) => props.color || "255, 255, 255"});
  font-weight: 550;
  line-height: 1.1em;
  margin: 0;
`;

const ColorCode = styled.p<{ color?: string }>`
  font-size: 1.1rem;
  color: rgba(${(props) => props.color || "255, 255, 255"}, 0.75);
  font-weight: 550;
  line-height: 1.1em;
  margin: 0;
  text-transform: capitalize;
`;
