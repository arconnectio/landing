import { ArrowUpRightIcon, MapIcon } from "@iconicicons/react";
import styled, { css } from "styled-components";
import Button from "../Button";
import Spacer from "../Spacer";

export default function Hero() {
  return (
    <Wrapper>
      <HeroTitle>
        The only Arweave wallet
      </HeroTitle>
      <Spacer y={.75} />
      <HeroSubtitle>
        You’ll ever need
      </HeroSubtitle>
      <Spacer y={1.9} />
      <HeroDescription>
        ArConnect is an Arweave-native wallet extension that provides secure wallet management other things blah blab.
      </HeroDescription>
      <Spacer y={2.5} />
      <Buttons>
        <Button>
          Download
          <ArrowUpRightIcon />
        </Button>
        <Button color="0, 0, 0">
          Docs
          <MapIcon />
        </Button>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5.5rem 0 0;
`;

const heroText = css`
  font-size: 5.5rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
  line-height: 1.1em;
`;

const HeroTitle = styled.h1`
  color: rgb(${props => props.theme.accent});
  ${heroText}
`;

const HeroSubtitle = styled.h2`
  color: rgb(${props => props.theme.secondaryText});
  ${heroText}
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: rgb(${props => props.theme.secondaryText});
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
