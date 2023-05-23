import {
  ArrowUpRightIcon,
  DownloadIcon,
  GridIcon,
  MapIcon,
  TagIcon,
  CodeIcon
} from "@iconicicons/react";
import styled, { css } from "styled-components";
import StatPanel from "./StatPanel";
import Button from "../Button";
import Spacer from "../Spacer";
import Link from "next/link";

export default function Hero() {
  return (
    <Wrapper>
      <HeroTitle>
        Your gateway to <span>Arweave</span>
      </HeroTitle>
      <Spacer y={1.55} />
      <HeroDescription>
        A non-custodial Arweave-native wallet with extensive features,
        <br />
        all in your favorite browser.
      </HeroDescription>
      <Spacer y={2.5} />
      <Buttons>
        <Link href="/download" passHref legacyBehavior>
          <Button>
            Download
            <ArrowUpRightIcon />
          </Button>
        </Link>
        <Button
          color="0, 0, 0"
          href="https://github.com/arconnectio/ArConnect#arconnect"
          target="_blank"
          rel="noopener noreferer"
        >
          Docs
          <MapIcon />
        </Button>
      </Buttons>
      <Spacer y={7} />
      <Stats>
        <StatPanel icon={<DownloadIcon />} name="Installs" value={17245} />
        <StatPanel icon={<TagIcon />} name="Releases" value={26} />
        <StatLink href="/apps">
          <StatPanel icon={<GridIcon />} name="Apps" value={20} plus />
        </StatLink>
        <StatPanel icon={<CodeIcon />} name="API functions" value={16} />
      </Stats>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    height: calc(100vh - 100px);
    padding-top: 100px;
  }
`;

const heroText = css`
  font-size: 5.5rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
  line-height: 1.1em;

  @media screen and (max-width: 720px) {
    font-size: 3.25rem;
  }
`;

const HeroTitle = styled.h1`
  color: rgb(${(props) => props.theme.accent});
  ${heroText}

  span {
    color: rgb(${(props) => props.theme.secondaryText});
  }
`;

const HeroSubtitle = styled.h2`
  color: rgb(${(props) => props.theme.secondaryText});
  ${heroText}
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: rgb(${(props) => props.theme.secondaryText});
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    font-size: 1rem;
    max-width: 92%;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0 auto;
  width: max-content;

  ${Button} {
    width: 140px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;

  @media screen and (max-width: 720px) {
    display: grid;
    justify-content: space-between;
    padding: 0 5vw;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
`;

const StatLink = styled(Link)`
  text-decoration: none;
`;
