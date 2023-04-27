import { ArrowUpRightIcon, MapIcon } from "@iconicicons/react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Button from "../Button";
import Spacer from "../Spacer";
import Image from "next/image";

export default function Features() {
  return (
    <Wrapper>
      <SectionTitle>
        Rest assured
        <span>Your funds are now protected</span>
      </SectionTitle>
      <Spacer y={3.8} />
      <FeaturesWrapper>
        <NoPaddingFeatures>
          <Feature color="#262626">
            <FeatureTitle color="#AB9AFF">A secure place</FeatureTitle>
            <FeatureTitle color="#fff">For your assets</FeatureTitle>
            <Spacer y={2.5} />
            <FeatureParagraph color="#dfdfdf">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              facilis non, modi excepturi dolorem rem voluptatum doloremque
              explicabo temporibus at cumque, repellat ullam ex tempore aliquid
              nostrum quaerat libero quos?
            </FeatureParagraph>
            <Spacer y={2.5} />
            <Image
              src="/collectibles.svg"
              width={440}
              height={210}
              alt="An image of three collectible cards that can be found in the ArConnect extension"
              draggable={false}
            />
          </Feature>
          <Spacer y={3} />
          <Feature color="#AB9AFF">
            <FeatureTitle color="#000">Track balances</FeatureTitle>
            <FeatureTitle color="#fff">See spendings</FeatureTitle>
            <Spacer y={2.5} />
            <FeatureParagraph color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              facilis non, modi excepturi dolorem rem voluptatum doloremque
              explicabo temporibus at cumque, repellat ullam ex tempore aliquid
              nostrum quaerat libero quos?
            </FeatureParagraph>
            <Spacer y={2.5} />
            <Image
              src="/activity.svg"
              width={470}
              height={240}
              alt="An image of a transaction history for a wallet as shown in the ArConnect extension"
              draggable={false}
            />
          </Feature>
        </NoPaddingFeatures>
        <div>
          <Spacer y={12} />
          <Feature color="#fff">
            <FeatureTitle color="#AB9AFF">Take control</FeatureTitle>
            <FeatureTitle>Own your wallet</FeatureTitle>
            <Spacer y={2.5} />
            <FeatureParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              facilis non, modi excepturi dolorem rem voluptatum doloremque
              explicabo temporibus at cumque, repellat ullam ex tempore aliquid
              nostrum quaerat libero quos?
            </FeatureParagraph>
            <Spacer y={2} />
            <Button>
              Learn more
              <ArrowUpRightIcon />
            </Button>
          </Feature>
          <Spacer y={3} />
          <Feature color="#000">
            <FeatureTitle color="#AB9AFF">We’ll be there</FeatureTitle>
            <FeatureTitle color="#fff">Along the way</FeatureTitle>
            <Spacer y={2.5} />
            <FeatureParagraph color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              facilis non, modi excepturi dolorem rem voluptatum doloremque
              explicabo temporibus at cumque, repellat ullam ex tempore aliquid
              nostrum quaerat libero quos?
            </FeatureParagraph>
            <Spacer y={2} />
            <Buttons>
              <Button>
                Get help
                <ArrowUpRightIcon />
              </Button>
              <Button>
                Docs
                <MapIcon />
              </Button>
            </Buttons>
          </Feature>
        </div>
      </FeaturesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 7rem 10vw 4.5rem;
`;

const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.4rem;
`;

const Feature = styled.div<{ color: string }>`
  padding: 3rem;
  border-radius: 30px;
  background-color: ${(props) => props.color};

  img {
    display: block;
    margin: 0 auto;
    user-select: none;
  }
`;

const FeatureTitle = styled.h3<{ color: string }>`
  font-size: 3.8rem;
  font-weight: 650;
  line-height: 1.15em;
  margin: 0;
  color: ${(props) => props.color || `rgb(${props.theme.secondaryText})`};
`;

const FeatureParagraph = styled.p<{ color: string }>`
  font-size: 1.05rem;
  font-weight: 550;
  text-align: justify;
  margin: 0;
  color: ${(props) => props.color || `rgb(${props.theme.secondaryText})`};
  line-height: 1.55em;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${Button} {
    width: 140px;
    padding-left: 0;
    padding-right: 0;
  }

  ${Button}:nth-child(2) {
    background-color: #fff;
    color: #000;
  }
`;

const NoPaddingFeatures = styled.div`
  ${Feature} {
    padding-bottom: 0;
  }
`;
