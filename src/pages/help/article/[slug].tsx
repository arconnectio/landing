import { Description, paragraphStyles, paragraphTitleStyles, Title } from "~/components/content/Text";
import { Articles, SectionTitle } from "~/components/article/Articles";
import Article, { ArticleProps } from "~/components/article/Article";
import Location from "~/components/article/Location";
import { getDocumentPaths } from "outstatic/server";
import Section from "~/components/content/Section";
import { InboxIcon } from "@iconicicons/react";
import markdownToHtml from "~/utils/markdown";
import Help from "~/components/article/Help";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import { load } from "outstatic/server";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Link from "next/link";

export default function Topic({ post, slug, related }: Props) {
  return (
    <>
      <Head title={`${post.title} - ArConnect Arweave Wallet`} />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>{post.title}</Title>
          <Spacer y={1} />
          <Description>
            {post.description}
          </Description>
          <Spacer y={1.35} />
          <Location
            category={{
              name: post.category.label,
              slug: post.category.value
            }}
            article={{
              name: post.title,
              slug
            }}
          />
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
            {related.map((article) => <Article {...article} />)}
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
  const post = await db
    .find({
      collection: "knowledge-base-articles",
      slug: params.slug
    })
    .project([
      "title",
      "content",
      "description",
      "category"
    ])
    .first();
  const content = await markdownToHtml(post.content || "");
  const related = await db
    .find({
      collection: "knowledge-base-articles",
      // @ts-expect-error
      category: {
        $where: function() {
          // @ts-expect-error
          return !!post.category.find(({ value }: { value: string }) => value === this.value);
        }
      },
      slug: {
        $ne: params.slug
      }
    }).project([
      "slug",
      "title",
      "description"
    ])
    .limit(3)
    .toArray();

  return {
    props: {
      post: {
        ...post,
        content,
        // @ts-expect-error
        category: post.category[0]
      },
      slug: params.slug,
      related
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
    category: Category;
  }
  slug: string;
  related: [
    ArticleProps,
    ArticleProps,
    ArticleProps
  ]
}

interface Category {
  value: string;
  label: string;
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
    margin-bottom: 1.35rem;
    ${paragraphStyles}
  }

  h2 {
    color: rgb(${(props) => props.theme.secondaryText});
    margin-bottom: .8rem;
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
    slug: string;
  };
}
