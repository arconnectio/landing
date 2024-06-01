import { Application as ApplicationInterface, getApps } from "../utils/apps";
import Background from "~/components/landing/Background";
import Features from "~/components/landing/Features";
import Install from "~/components/landing/Install";
import Mission from "~/components/landing/Mission";
import Hero from "~/components/landing/Hero";
import Apps from "~/components/landing/Apps";
import { LastBlog } from "~/utils/blogs";
import Footer from "~/components/Footer";
import { load } from "outstatic/server";
import styled from "styled-components";
import { GetStaticProps } from "next";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Home({ applications, last }: Props) {
  return (
    <>
      <Head />
      <Nav latestBlog={last} />
      <Main>
        <Hero
          appCount={applications.length}
        />
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
  try {
    const applications = await getApps();
    const db = await load();
    const last = await db
      .find<LastBlog>({
        collection: "blogs"
      })
      // @ts-expect-error
      .sort([{ publishedAt: -1 }])
      .project(["slug", "title", "publishedAt"])
      .first();

    // check if the blog was published in the last 5 days
    const fiveDaysAgo = new Date();
    const publishedDate = new Date(last?.publishedAt);

    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

    // return last blog if it was posted recently
    if (publishedDate.getTime() > fiveDaysAgo.getTime() && last) {
      return {
        props: {
          applications,
          last
        }
      };
    }

    return {
      props: { applications }
    };
  } catch {
    return {
      props: { applications: [] }
    }
  }
};

interface Props {
  applications: ApplicationInterface[];
  last?: LastBlog;
}
