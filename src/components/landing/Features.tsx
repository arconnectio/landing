import { ArrowDownIcon, ArrowUpRightIcon, MapIcon } from "@iconicicons/react";
import styled from "styled-components";
import Button from "../Button";
import Spacer from "../Spacer";
import Image from "next/image";

export default function Features() {
  return (
    <Wrapper>
      <FeaturesWrapper>
        <NoPaddingFeatures>
          <Feature color="#262626">
            <FeatureTitle color="#AB9AFF">Manage assets</FeatureTitle>
            <FeatureTitle color="#fff">View your activity</FeatureTitle>
            <Spacer y={2} />
            <FeatureParagraph color="#dfdfdf">
              View Arweave-native token balances and NFTs across multiple wallets and seamlessly switch between accounts. Oversee real-time transaction history with access to view block, all in 1-click.
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
            <FeatureTitle color="#000">Send and receive</FeatureTitle>
            <FeatureTitle color="#fff">
              tokens with ease
            </FeatureTitle>
            <Spacer y={2} />
            <FeatureParagraph color="#fff">
              Powerful token management with an easy-to-use interface. All wallet data is backed up by the secure browser extension storage API keeping your assets safe.
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
          <Spacer y={4} mobileY={0.05} />
          <Feature color="#fff">
            <FeatureTitle color="#AB9AFF">Focus on the</FeatureTitle>
            <FeatureTitle>development</FeatureTitle>
            <Spacer y={2} />
            <FeatureParagraph>
              ArConnect makes it simple for developers to spend their time on what matters: coding. It's easy to integrate our API and debug your apps with our selection of developer tools.
            </FeatureParagraph>
            <Spacer y={2} />
            <Buttons>
              <Button href="/support" target="_blank" rel="noopener noreferer">
                Get help
                <ArrowUpRightIcon />
              </Button>
              {/**
              <Button href="https://docs.arconnect.io/developer-tooling/arconnect-devtools" target="_blank" rel="noopener noreferer">
                Tooling
                <ArrowUpRightIcon />
              </Button>
              */}
              <Button
                href="https://github.com/arconnectio/ArConnect#arconnect"
                target="_blank"
                rel="noopener noreferer"
                color="0, 0, 0"
              >
                Docs
                <MapIcon />
              </Button>
            </Buttons>
          </Feature>
          <Spacer y={3} />
          <Feature color="#000">
            <FeatureTitle color="#AB9AFF">Interact with</FeatureTitle>
            <FeatureTitle color="#fff">Arweave apps</FeatureTitle>
            <Spacer y={2} />
            <FeatureParagraph color="#fff">
              ArConnect is the secure gateway to the leading platforms in the growing Arweave ecosystem. Interact with dApps ranging from permanent storage, NFT marketplaces, exchanges and more.
            </FeatureParagraph>
            <Spacer y={2} />
            <Button>
              Learn more
              <ArrowDownIcon />
            </Button>
          </Feature>
        </div>
      </FeaturesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5.2rem 10vw 4.5rem;

  @media screen and (max-width: 720px) {
    padding: 3.7rem 7vw;
  }
`;

const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.4rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Feature = styled.section<{ color: string }>`
  padding: 3rem;
  border-radius: 30px;
  background-color: ${(props) => props.color};

  img {
    display: block;
    margin: 0 auto;
    user-select: none;

    @media screen and (max-width: 720px) {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 1.5rem;
    width: calc(100vw - 1.5rem * 2 - 7vw * 2);
  }
`;

const FeatureTitle = styled.h2<{ color?: string }>`
  font-size: 3.2rem;
  font-weight: 650;
  line-height: 1.15em;
  margin: 0;
  color: ${(props) => props.color || `rgb(${props.theme.secondaryText})`};

  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
`;

const FeatureParagraph = styled.p<{ color?: string }>`
  font-size: 1.05rem;
  font-weight: 550;
  text-align: justify;
  margin: 0;
  color: ${(props) => props.color || `rgb(${props.theme.secondaryText})`};
  line-height: 1.55em;

  @media screen and (max-width: 720px) {
    font-size: 0.95rem;
  }
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
`;

const NoPaddingFeatures = styled.div`
  ${Feature} {
    padding-bottom: 0;
  }
`;
