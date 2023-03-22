import Background from "~/components/landing/Background";
import Features from "~/components/landing/Features";
import Install from "~/components/landing/Install";
import Mission from "~/components/landing/Mission";
import Hero from "~/components/landing/Hero";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Home() {
  return (
    <>
      <Head />
      <Nav />
      <Main>
        <Hero />
        <Features />
        <Install />
        <Mission />
        <Background />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;