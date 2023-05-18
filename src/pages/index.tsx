import { Application as ApplicationInterface, getApps } from "../utils/apps";
import Background from "~/components/landing/Background";
import Features from "~/components/landing/Features";
import Install from "~/components/landing/Install";
import Mission from "~/components/landing/Mission";
import Hero from "~/components/landing/Hero";
import Apps from "~/components/landing/Apps";
import Footer from "~/components/Footer";
import styled from "styled-components";
import { GetStaticProps } from "next";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Home({ applications }: Props) {
  return (
    <>
      <Head />
      <Nav />
      <Main>
        <Hero />
        <Features />
        <Apps apps={applications} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const applications = await getApps();

  return {
    props: { applications }
  };
};

interface Props {
  applications: ApplicationInterface[];
}
