import { Articles, SectionTitle } from "~/components/article/Articles";
import { Manrope, Space_Grotesk } from "next/font/google";
import Section from "~/components/content/Section";
import Article from "~/components/article/Article";
import Help from "~/components/article/Help";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import { load } from "outstatic/server";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Link from "next/link";
import {
  FastForwardIcon,
  PinIcon,
  SearchIcon,
  SmartphoneIcon,
  TagIcon,
  TrendingUpIcon,
  WalletIcon
} from "@iconicicons/react";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "600"
});
const manrope = Manrope({
  subsets: ["latin"]
});

export default function KnowledgeBase({ pinned, last }: Props) {
  return (
    <>
      <Head title="Help - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Spacer y={2} />
        <TitleSection>
          <Question>How can we help?</Question>
          <Title>Knowledge Base</Title>
          <Spacer y={1.6} />
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="Search for questions, articles or keywords..."
            />
            <SearchIcon />
          </SearchBox>
        </TitleSection>
        <Spacer y={3} />
        <Section>
          <SectionTitle>
            <PinIcon />
            Pinned articles
          </SectionTitle>
          <Spacer y={2.4} />
          <Articles>
            {pinned.map((article) => <Article {...article} />)}
          </Articles>
        </Section>
        <Spacer y={2.5} />
        <Section>
          <SectionTitle>
            <TagIcon />
            Topics
          </SectionTitle>
          <Spacer y={2.4} />
          <Articles>
            <Topic href="/help/topic/getting-started">
              <FastForwardIcon />
              Getting started
            </Topic>
            <Topic href="/help/topic/wallet-management">
              <WalletIcon />
              Wallet management
            </Topic>
            <Topic href="/help/topic/apps-and-connections">
              <SmartphoneIcon />
              Apps & connections
            </Topic>
          </Articles>
        </Section>
        <Spacer y={2.5} />
        <Section>
          <SectionTitle>
            <TrendingUpIcon />
            Popular articles
          </SectionTitle>
          <Spacer y={2.4} />
          <Articles>
            {last.map((article) => <Article {...article} />)}
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

export async function getStaticProps() {
  const db = await load();
  const requiredFields = [
    "slug",
    "title",
    "description"
  ];
  const pinned = await db
    .find({
      collection: "knowledge-base-articles",
      // @ts-expect-error
      category: {
        $where: "this.value === 'pinned'"
      }
    }).project(requiredFields)
    // @ts-expect-error
    .sort([{ publishedAt: -1 }])
    .limit(3)
    .toArray();
  const last = await db
    .find({
      collection: "knowledge-base-articles",
    })
    // @ts-expect-error
    .sort([{ publishedAt: -1 }])
    .limit(6)
    .project(requiredFields)
    .toArray();

  return {
    props: {
      pinned,
      last
    }
  };
}

interface Props {
  pinned: [Article, Article, Article];
  last: [
    Article,
    Article,
    Article,
    Article,
    Article,
    Article
  ];
}

interface Article {
  slug: string;
  title: string;
  description: string;
}

const Main = styled.main`
  position: relative;
`;

const TitleSection = styled.section`
  margin: 0 5.75rem;
  padding: 4rem 0;
  background-color: rgba(${(props) => props.theme.accent}, 0.2);
  border-radius: 40px;

  @media screen and (max-width: 720px) {
    margin: 7rem 1.25rem 0;
    padding: 2.3rem 0;
    border-radius: 30px;
  }
`;

const Question = styled.p`
  ${spacegrotesk.style}
  font-size: 1.45rem;
  color: rgb(${(props) => props.theme.accent});
  text-align: center;
  margin: 0;

  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.85rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.primaryText});
  text-align: center;
  margin: 0;

  @media screen and (max-width: 720px) {
    font-size: 1.85rem;
  }
`;

const SearchBox = styled.div`
  position: relative;
  width: max-content;
  background-color: rgb(${(props) => props.theme.background});
  overflow: hidden;
  border-radius: 14px;
  margin: 0 auto;
  z-index: 1;

  svg {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 2;
    color: rgba(${(props) => props.theme.secondaryText}, 0.45);
    transform: translateY(-50%);
  }
`;

const SearchInput = styled.input`
  ${manrope.style}
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 1.2rem 1rem;
  padding-left: calc(1rem * 2 + 1.5rem);
  z-index: 3;
  width: 500px;
  color: rgb(${(props) => props.theme.secondaryText});

  &::placeholder {
    color: rgba(${(props) => props.theme.secondaryText}, 0.45);
  }

  @media screen and (max-width: 720px) {
    width: 290px;
    padding: 1rem 0.34rem;
    padding-left: calc(0.34rem * 2 + 2.63rem);
    font-size: 0.85rem;
  }
`;

const Topic = styled(Link)`
  font-size: 1.55rem;
  font-weight: 550;
  text-align: center;
  color: rgb(${(props) => props.theme.accent});
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: 3.35rem 2rem;
  gap: 0.4rem;
  background-color: rgba(${(props) => props.theme.accent}, 0.2);
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.17s ease;

  svg {
    width: 3.5rem;
    height: 3.5rem;
  }

  &:hover {
    transform: scale(0.975);
  }

  &:active {
    transform: scale(0.95);
  }
`;
