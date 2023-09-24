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
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
            suscipit obcaecati distinctio ipsa dolores quam error ab quis earum
            mollitia deleniti culpa nostrum veniam a dolorem, ullam animi?
            Officiis.
          </Description>
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
            {articles.map((article, i) => <Article {...article} key={i} />)}
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
    .find({
      collection: "knowledge-base-articles",
      // @ts-expect-error
      category: {
        $where: `this.value === '${params.topic}'`
      }
    }).project([
      "slug",
      "title",
      "description",
      "category"
    ])
    // @ts-expect-error
    .sort([{ publishedAt: -1 }])
    .toArray();

  return {
    props: {
      articles,
      // @ts-expect-error
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
  }
}

interface Params {
  params: {
    topic: string;
  }
}

const Main = styled.main`
  position: relative;
`;

interface Props {
  category: {
    value: string;
    label: string;
  };
  articles: ArticleProps[];
}
