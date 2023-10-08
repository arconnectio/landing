import { Articles, SectionTitle } from "~/components/article/Articles";
import { Description, Title } from "~/components/content/Text";
import Location from "~/components/article/Location";
import Section from "~/components/content/Section";
import Article, { ArticleProps } from "~/components/article/Article";
import { InboxIcon } from "@iconicicons/react";
import Help from "~/components/article/Help";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import { load } from "outstatic/server";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Topic({ category, articles }: Props) {
  return (
    <>
      <Head title={`${category.label} Help - ArConnect Arweave Wallet`} />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>{category.label}</Title>
          <Spacer y={1} />
          <Description>{topicDescriptions[category.value]}</Description>
          <Spacer y={1.35} />
          <Location
            category={{
              name: category.label,
              slug: category.value
            }}
          />
        </Section>
        <Section>
          <SectionTitle>
            <InboxIcon />
            Articles
          </SectionTitle>
          <Spacer y={2.4} />
          <Articles>
            {articles.map((article, i) => (
              <Article {...article} key={i} />
            ))}
          </Articles>
        </Section>
        <Spacer y={3} />
        <Help />
        <Spacer y={2.5} />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const db = await load();
  const articles = await db
    .find<{
      category: Category[];
    }>({
      collection: "knowledge-base-articles",
      // @ts-expect-error
      category: {
        $where: `this.value === '${params.topic}'`
      }
    })
    .project(["slug", "title", "description", "category"])
    // @ts-expect-error
    .sort([{ publishedAt: -1 }])
    .toArray();

  return {
    props: {
      articles,
      category: articles[0].category.find((c) => c.value === params.topic)
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { topic: "getting-started" } },
      { params: { topic: "wallet-management" } },
      { params: { topic: "apps-and-connections" } }
    ],
    fallback: false
  };
}

const topicDescriptions: Record<string, string> = {
  "getting-started":
    "Essential resources on getting started with the ArConnect Arweave wallet. You should start here and follow these guides to have the most seamless experience possible with the extension.",
  "wallet-management":
    "Guides on how to best manage your wallet. This will help you learn how to send and receive tokens and use your wallet every day.",
  "apps-and-connections":
    "ArConnect's primary goal is to enable you to securely access dApps. Here you will find guides and helpful articles on doing this securely."
};

interface Params {
  params: {
    topic: string;
  };
}

const Main = styled.main`
  position: relative;
`;

interface Props {
  category: Category;
  articles: ArticleProps[];
}

export interface Category {
  value: string;
  label: string;
}
