import { ArrowUpRightIcon } from "@iconicicons/react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";
import Spacer from "../Spacer";

export default function Mission() {
  return (
    <Wrapper>
      <Card>
        <Title>Our mission</Title>
        <Spacer y={0.2} mobileY={0.4} />
        <Statement>
          We are here to provide you the best possible experience with Arweave,
          aoComputer, and the permaweb
        </Statement>
        <Spacer y={2.6} mobileY={3} />
        <Button href="/support" target="_blank" rel="noopener noreferer">
          Chat with us
          <ArrowUpRightIcon />
        </Button>
        <MissionElement top="-45px" left="15%">
          <Image
            src="/mission/collectible.png"
            width={150}
            height={150}
            alt="Collectible element from ArConnect"
            draggable={false}
          />
        </MissionElement>
        <MissionElement top="10%" left="45%">
          <Image
            src="/mission/wallet.png"
            width={307}
            height={36}
            alt="Wallet header element from ArConnect"
            draggable={false}
          />
        </MissionElement>
        <MissionElement top="-35px" left="78%">
          <Image
            src="/mission/price.png"
            width={312}
            height={156}
            alt="Token price element from ArConnect"
            draggable={false}
          />
        </MissionElement>
        <MissionElement top="62%" left="10%">
          <Image
            src="/mission/ans.png"
            width={130.5}
            height={30}
            alt="ANS usertag element from ArConnect"
            draggable={false}
          />
        </MissionElement>
        <MissionElement top="80%" left="-25px">
          <Image
            src="/mission/token.png"
            width={472}
            height={64}
            alt="Token element from ArConnect"
            draggable={false}
          />
        </MissionElement>
        <MissionElement top="68%" left="75%">
          <Image
            src="/mission/wallets.png"
            width={340}
            height={223}
            alt="Wallet selector element from ArConnect"
            draggable={false}
          />
        </MissionElement>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4.5rem 10vw 7rem;

  @media screen and (max-width: 720px) {
    padding: 4rem 7vw 3rem;
  }
`;

const Card = styled.div`
  position: relative;
  padding: 8rem 0 7rem;
  background-color: rgba(${(props) => props.theme.accent}, 0.11);
  border-radius: 40px;
  z-index: 1;

  ${Button} {
    margin: 0 auto;
  }

  @media screen and (max-width: 720px) {
    padding: 4rem 0 3rem;
  }
`;

const titleFont = Space_Grotesk({ subsets: ["latin"] });

const Title = styled.h2`
  font-size: 1.9rem;
  font-weight: 650;
  color: rgb(${(props) => props.theme.accent});
  text-align: center;
  margin: 0;
  ${titleFont.style}

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

const Statement = styled.h3`
  font-size: 3.1rem;
  font-weight: 750;
  color: #171717;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  line-height: 1.15em;

  @media screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
`;

const MissionElement = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: -1;

  img {
    display: block;
    user-select: none;
  }

  @media screen and (max-width: 1130px) {
    display: none;
  }
`;
