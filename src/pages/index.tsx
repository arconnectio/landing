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
import { load } from "outstatic/server"

export default function Home({ applications, last }: Props) {
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
  const db = await load();
  const last = await db
    .find({
      collection: "blogs",
    })
    // @ts-expect-error
    .sort([{ publishedAt: -1 }])
    .project([
      "slug",
      "title",
      "publishedAt"
    ])
    .first();
    console.log(last)

  return {
    props: {
      applications,
      last: // TODO
    }
  };
};

interface Props {
  applications: ApplicationInterface[];
  last?: {
    id: string;
    title: string;
  }
}
