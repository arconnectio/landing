import { Description, paragraphStyles, paragraphTitleStyles, Title } from "~/components/content/Text";
import { Articles, SectionTitle } from "~/components/article/Articles";
import { getDocumentBySlug, getDocumentPaths } from "outstatic/server";
import Location from "~/components/article/Location";
import Section from "~/components/content/Section";
import Article from "~/components/article/Article";
import { InboxIcon } from "@iconicicons/react";
import markdownToHtml from "~/utils/markdown";
import Help from "~/components/article/Help";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Link from "next/link";

export default function Topic({ post }: Props) {
  return (
    <>
      <Head title="Article title - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>{post.title}</Title>
          <Spacer y={1} />
          <Description>
            {post.description}
          </Description>
          <Spacer y={1.35} />
          <Location />
        </Section>
        <ContentWrapper>
          <Content dangerouslySetInnerHTML={{ __html: post.content }}></Content>
          <ContentNavigator>
            <ContentNavigatorTitle>
              Content map
            </ContentNavigatorTitle>
            <ContentLink activeSection={true} href="#">
              {post.title}
            </ContentLink>
            <ContentLink href="#test">
              Test
            </ContentLink>
            <ContentLink href="#test">
              Test
            </ContentLink>
          </ContentNavigator>
        </ContentWrapper>
        <Spacer y={2.5} />
        <Section>
          <SectionTitle>
            <InboxIcon />
            Related articles
          </SectionTitle>
          <Spacer y={2.4} />
          <Articles>
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
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
  const post = getDocumentBySlug("knowledge-base-articles", params.article, [
    "title",
    "content",
    "description"
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getDocumentPaths("knowledge-base-articles"),
    fallback: false
  }
}

interface Props {
  post: {
    title: string;
    content: string;
    description: string;
  }
}

const Main = styled.main`
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 5.5rem;
  padding: 1.3rem 10vw;

  @media screen and (max-width: 1050px) {
    padding: 3rem 5vw;
    gap: 4.5rem;
  }

  @media screen and (max-width: 900px) {
    padding: 3rem 8vw;
    gap: 3rem;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 2rem 7vw;
  }
`;

const Content = styled.div`
  width: 70%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  a {
    color: rgb(${(props) => props.theme.accent});
    text-decoration: none;
    cursor: pointer;
  }

  p {
    color: rgb(${(props) => props.theme.secondaryText});
    ${paragraphStyles}
  }

  h2 {
    color: rgb(${(props) => props.theme.secondaryText});
    ${paragraphTitleStyles}
  }
`;

const ContentNavigator = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContentNavigatorTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  color: rgb(${props => props.theme.primaryText});
  margin: 0;
`;

const ContentLink = styled(Link)<{
  activeSection?: boolean;
}>`
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(${props => props.theme.accent}, .78);
  cursor: pointer;
  text-decoration: none;
  padding-left: 1.2rem;
  transition: all .17s ease;

  &:hover {
    color: rgba(${props => props.theme.accent}, 1);
  }

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    top: 50%;
    left: 0;
    background-color: rgba(${props => props.theme.accent}, ${props => props.activeSection ? ".78" : "0"});
    transform: translateY(-50%);
    transition: all .17s ease;
  }
`;

interface Params {
  params: {
    article: string;
  };
}
