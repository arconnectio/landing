import { getDocumentPaths, load } from "outstatic/server";
import Section from "~/components/content/Section";
import { CalendarIcon } from "@iconicicons/react";
import markdownToHtml from "~/utils/markdown";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import {
  Date,
  paragraphStyles,
  paragraphTitleStyles
} from "~/components/content/Text";
import Nav from "~/components/Nav";
import { useMemo } from "react";
import { Title } from "./index";
import dayjs from "dayjs";

export default function BlogPost({ post, content }: Props) {
  const readTime = useMemo(() => {
    const readTimeForWord = 275;
    const words = content.split(/\s+/);

    return Math.floor((words.length * readTimeForWord) / (1000 * 60));
  }, [content]);

  return (
    <>
      <Head title={`${post.title} - ArConnect Arweave Wallet`} />
      <Nav />
      <main>
        <BlogSection>
          <Date>
            <CalendarIcon />
            {dayjs(post.publishedAt).format("DD MMM, YYYY")}
          </Date>
          <Spacer y={1} />
          <BlogTitle>{post.title}</BlogTitle>
          <Spacer y={2} />
          <AuthorGroup>
            <AuthorProfile
              src={post.author.picture}
              alt="profile picture"
              draggable={false}
            />
            <div>
              <AuthorName>{post.author.name}</AuthorName>
              <ReadTime>{readTime + " min read"}</ReadTime>
            </div>
          </AuthorGroup>
          <Spacer y={3} />
          <Thumbnail
            src={post.coverImage}
            alt="Post cover image"
            draggable={false}
          />
        </BlogSection>
        <BlogSection>
          <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
        </BlogSection>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const db = await load();
  const post = await db
    .find<Post>({
      collection: "blogs",
      slug: params.slug
    })
    .project([
      "title",
      "author",
      "publishedAt",
      "converImage",
      "content",
      "description"
    ])
    .first();

  if (!post) {
    return {
      notFound: true
    };
  }

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post,
      content
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: getDocumentPaths("blogs"),
    fallback: false
  };
}

const BlogTitle = styled(Title)`
  font-weight: 600;
  line-height: 1.25em;
`;

const BlogSection = styled(Section)`
  padding: 1.3rem 28.5vw;

  @media screen and (max-width: 1050px) {
    padding: 3rem 20vw;
  }

  @media screen and (max-width: 900px) {
    padding: 3rem 16vw;
  }

  @media screen and (max-width: 720px) {
    padding: 2rem 7vw;
  }
`;

const Thumbnail = styled.img`
  display: block;
  user-select: none;
  width: 100%;
  height: auto;
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorProfile = styled.img`
  border-radius: 100%;
  width: 3.475rem;
  height: 3.475rem;
  user-select: none;
`;

const AuthorName = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  color: rgb(${(props) => props.theme.primaryText});
`;

const ReadTime = styled(AuthorName)`
  font-weight: 500;
  font-size: 0.925rem;
  color: rgba(${(props) => props.theme.primaryText}, 0.62);
`;

const Content = styled.div`
  a {
    position: relative;
    color: rgb(${(props) => props.theme.accent});
    text-decoration: none;
    cursor: pointer;
  }

  p {
    color: rgb(${(props) => props.theme.secondaryText});
    margin: 1rem 0 2.2rem;
    ${paragraphStyles}
  }

  h2 {
    color: rgb(${(props) => props.theme.secondaryText});
    margin-bottom: 0.8rem;
    ${paragraphTitleStyles}
  }

  blockquote {
    position: relative;
    margin: 1rem 0 2.2rem;
    padding: 0.85rem 0;

    p {
      font-size: 1.3rem;
    }

    p:first-child {
      margin-top: 0;
    }

    p:last-child {
      margin-bottom: 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -25px;
      width: 1px;
      background-color: rgb(${(props) => props.theme.accent});
    }
  }
`;

interface Params {
  params: {
    slug: string;
  };
}

interface Props {
  content: string;
  post: Post;
}

interface Post {
  title: string;
  author: {
    name: string;
    picture: string;
  };
  publishedAt: string;
  coverImage: string;
  description: string;
  content: string;
}
