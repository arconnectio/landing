import styled, { css } from "styled-components";
import { sendConversion } from "~/utils/pixel";
import StatPanel from "./StatPanel";
import Button from "../Button";
import Spacer from "../Spacer";
import Link from "next/link";
import {
//   ArrowUpRightIcon,
  DownloadIcon,
  GridIcon,
//   MapIcon,
  TagIcon,
  CodeIcon
} from "@iconicicons/react";

export default function Hero() {
  return (
    <Wrapper>
      <HeroTitle>
        ArConnect is now&nbsp;
        <HeroLink
            href="https://www.wander.app/"
            target="_blank"
            rel="noopener noreferer"
          >
          Wander
        </HeroLink>
      </HeroTitle>
      <Spacer y={1.55} />
      <HeroDescription>
        A non-custodial Arweave and AO native wallet with extensive features
        <br />
        all in your favorite browser and mobile device
      </HeroDescription>
      <Spacer y={1.55} />
      <Buttons>
        <Button
          color="0, 0, 0"
          href="https://www.wander.app/"
          target="_blank"
          rel="noopener noreferer"
        >
          Go to Wander
        </Button>
      </Buttons>
      <Spacer y={5} />
      <Stats>
        <StatPanel
          icon={<DownloadIcon />}
          name="Installs"
          value={100000}
          plus
        />
        <StatPanel icon={<TagIcon />} name="Transactions" value={500000} />
        <StatLink href="/apps">
          <StatPanel icon={<GridIcon />} name="Apps" value={100} plus />
        </StatLink>
        <StatLink href="https://docs.wander.app/api/intro">
          <StatPanel icon={<CodeIcon />} name="API functions" value={20} />
        </StatLink>
      </Stats>
    </Wrapper>
  );
}

const HeroLink = styled.a`
  text-decoration: none;
`;

const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    height: calc(100vh - 100px);
  }

  @media screen and (max-width: 375px) {
    height: max-content;
    padding-top: 60px;
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

  @media screen and (max-width: 320px) {
    gap: 1rem;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  flex-wrap: wrap;

  @media screen and (max-width: 720px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

const StatLink = styled(Link)`
  text-decoration: none;
`;
