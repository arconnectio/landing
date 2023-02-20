import { DownloadIcon, MessageIcon } from "@iconicicons/react";
import { Button } from "../components/Button";
import Metas from "../components/Metas";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ArConnect</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Metas title="ArConnect" description="Secure wallet management for Arweave" image="https://arconnect.io/logo.png" />
      <Wrapper>
        <Title>
          ArConnect
        </Title>
        <Buttons>
          <LandingBtn onClick={() => window.open("https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap")}>
            <DownloadIcon />
            Download
          </LandingBtn>
          <LandingBtn secondary onClick={() => window.open("https://verto.exchange/chat")}>
            <MessageIcon />
            Discord
          </LandingBtn>
        </Buttons>
        <Link href="/pp">
          <PrivacyPolicy>
            Privacy Policy
          </PrivacyPolicy>
        </Link>
      </Wrapper>
    </>
  )
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(171, 154, 255, 0.15), rgba(171, 154, 255, 0.15)), #FFFFFF;
  overflow: auto;
`;

const Title = styled.h1`
  font-size: 7rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
  color: #AB9AFF;
  margin-bottom: .2rem;

  @media screen and (max-width: 720px) {
    font-size: 4.2rem;
    margin-bottom: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const LandingBtn = styled(Button)`
  padding-left: 0;
  padding-right: 0;
  width: 182px;

  @media screen and (max-width: 720px) {
    width: 40vw;
  }
`;

const PrivacyPolicy = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #AB9AFF;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;
