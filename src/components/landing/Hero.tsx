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
      <HeroTitle>The only Arweave wallet</HeroTitle>
      <Spacer y={0.75} />
      <HeroSubtitle>You’ll ever need</HeroSubtitle>
      <Spacer y={1.9} />
      <HeroDescription>
        ArConnect is an Arweave-native wallet extension that provides secure
        wallet and asset management in your favorite browser.
      </HeroDescription>
      <Spacer y={2.5} />
      <Buttons>
        <Link href="/download" passHref legacyBehavior>
          <Button>
            Download
            <ArrowUpRightIcon />
          </Button>
        </Link>
        <Button color="0, 0, 0">
          Docs
          <MapIcon />
        </Button>
      </Buttons>
      <Spacer y={4.5} />
      <Stats>
        <StatPanel icon={<DownloadIcon />} name="Installs" value={15600} />
        <StatPanel icon={<TagIcon />} name="Releases" value={34} />
        <StatPanel icon={<GridIcon />} name="Apps" value={54} />
        <StatPanel icon={<CodeIcon />} name="API functions" value={15600} />
      </Stats>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4.5rem 0 0;
`;

const heroText = css`
  font-size: 5.5rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
  line-height: 1.1em;
`;

const HeroTitle = styled.h1`
  color: rgb(${(props) => props.theme.accent});
  ${heroText}
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
  max-width: 60%;
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
`;
