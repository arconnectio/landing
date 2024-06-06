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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://arconnect.io",
              sameAs: ["https://twitter.com/arconnectio", "https://github.com/arconnectio"],
              logo: "https://arconnect.io/logo.png",
              name: "ArConnect",
              description: "ArConnect is a non-custodial Arweave wallet with extensive features, all in your favorite browser.",
              email: "hello@arconnect.io",
              foundingDate: "2021-02-13T23:00:00.000Z"
            })
          }}
        />
      </Head>
      <Nav latestBlog={last} />
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
