import { DownloadIcon, MessageIcon } from "@iconicicons/react";
import { Button } from "../components/Button";
import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ArConnect</title>
        <link rel="icon" href="/logo.png" />
      </Head>
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
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(171, 154, 255, 0.15), rgba(171, 154, 255, 0.15)), #FFFFFF;;
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