import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ArConnect - Witness the Rebirth</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Wrapper>
        <Title>
          Witness the Rebirth
        </Title>
        <Counter>
          2<span>days</span>{" "}
          10<span>hours</span>{" "}
          43<span>minutes</span>
        </Counter>
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
`;

const Counter = styled.h2`
  font-size: 5.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: rgba(171, 154, 255, .7);

  span {
    margin-left: .45rem;
    font-size: 2.75rem;
  }
`;
