import Article, { ArticleProps } from "~/components/article/Article";
import { getDocumentPaths, load } from "outstatic/server";
import Section from "~/components/content/Section";
import { CalendarIcon } from "@iconicicons/react";
import markdownToHtml from "~/utils/markdown";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import {
  Date as DateWrapper,
  paragraphStyles,
  ParagraphTitle,
  paragraphTitleStyles
} from "~/components/content/Text";
import Nav from "~/components/Nav";
import { useMemo } from "react";
import { Title } from "./index";
import dayjs from "dayjs";

export default function BlogPost({ post, content, recommended, structuredData }: Props) {
  const readTime = useMemo(() => {
    const readTimeForWord = 275;
    const words = content.split(/\s+/);

    return Math.floor((words.length * readTimeForWord) / (1000 * 60));
  }, [content]);

  return (
    <>
      <Head
        title={`${post.title} - ArConnect Arweave Wallet`}
        description={post.description}
        image={post.coverImage ? `https://arconnect.io${post.coverImage}` : undefined}
      >
        {post.tags && post.tags.length > 0 && (
          <>
            <meta name="keywords" content={post.tags.join(",")} />
            <meta name="tags" content={post.tags.join(",")} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Nav />
      <main>
        <BlogSection>
          <DateWrapper>
            <CalendarIcon />
            {dayjs(post.publishedAt).format("DD MMM, YYYY")}
          </DateWrapper>
          <Spacer y={1} />
          <BlogTitle>{post.title}</BlogTitle>
          <Spacer y={2} />
          <AuthorGroup>
            <AuthorProfile
              src={post.author.picture || "/logo.png"}
              alt="profile picture"
              draggable={false}
            />
            <div>
              <AuthorName>{post.author.name}</AuthorName>
              <ReadTime>{readTime + " min read"}</ReadTime>
            </div>
          </AuthorGroup>
          {post.tags && post.tags.length > 0 && (
            <>
              <Spacer y={1} />
              <Tags>
                {post.tags.map((tag, i) => (
                  <Tag key={i}>
                    {tag}
                  </Tag>
                ))}
              </Tags>
            </>
          )}
          {post.coverImage && (
            <>
              <Spacer y={3} />
              <Thumbnail
                src={post.coverImage}
                alt="Post cover image"
                draggable={false}
              />
            </>
          )}
        </BlogSection>
        <BlogSection>
          <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
        </BlogSection>
        {recommended.length > 0 && (
          <BlogSection>
            <ParagraphTitle>Recommended blog posts</ParagraphTitle>
            <Spacer y={2.25} />
            <Recommended>
              {recommended.map((post, i) => (
                <Article
                  {...post}
                  coverImage={post.coverImage || "https://arconnect.io/og.png"}
                  baseLink="/blog"
                  key={i}
                />
              ))}
            </Recommended>
          </BlogSection>
        )}
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
      "coverImage",
      "content",
      "description",
      "tags"
    ])
    .first();

  const recommended = await db
    .find({
      collection: "blogs",
      slug: {
        $ne: params.slug
      }
    })
    .project(["slug", "title", "description", "coverImage", "author"])
    .limit(2)
    .toArray();

  if (!post) {
    return {
      notFound: true
    };
  }

  const content = await markdownToHtml(post.content || "");

  const structuredData: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    title: post.title,
    description: post.description,
    image: [`https://arconnect.io/${post.coverImage}`],
    datePublished: new Date(post.publishedAt).toISOString(),
    author: [{
      "@type": post.author.name == "ArConnect" ? "Organization" : "Person",
      name: post.author.name,
      image: post.author.picture
    }],
    publisher: {
      "@type": "Organization",
      name: "ArConnect Blogs",
      logo: {
        "@type": "ImageObject",
        url: "https://arconnect.io/logo.png"
      }
    }
  };

  return {
    props: {
      post,
      content,
      recommended,
      structuredData
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
  line-height: 1.15em;

  @media (max-width: 600px) {
    font-size: 42px;
  }
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
  aspect-ratio: 3/2;
  object-fit: contain;
  object-position: center;
  background-color: rgba(${(props) => props.theme.accent}, .15);
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Tags = styled.ul`
  display: flex;
  align-items: center;
  gap: .8rem;
  list-style: none;
  padding: 0;
`;

const Tag = styled.li`
  background-color: rgba(${props => props.theme.accent}, .11);
  color: rgb(${props => props.theme.secondaryText});
  border-radius: 9px;
  padding: .5rem 1.1rem;
  font-size: .88rem;
  font-weight: 600;
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

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      right: 0;
      height: 2px;
      width: 0;
      background-color: rgb(${(props) => props.theme.accent});
      transition: all .17s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
      right: unset;
    }
  }

  p {
    color: rgb(${(props) => props.theme.secondaryText});
    margin: 1rem 0 1.1rem;
    ${paragraphStyles}
  }

  h2 {
    ${paragraphTitleStyles}
    font-size: 1.7rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.2em;
    margin-bottom: 0.9em;
    color: rgb(${(props) => props.theme.primaryText});
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

  li {
    margin: 1rem 0;

    p {
      margin: 0;
      margin-left: 1rem;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  img {
    display: block;
    user-select: none;
    width: 100%;
    aspect-ratio: 7/4;
    object-fit: contain;
    object-position: center;
    background-color: rgba(${(props) => props.theme.accent}, .15);
  }
`;

const Recommended = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.55rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
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
  recommended: ArticleProps[];
  structuredData: Record<string, any>;
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
  tags?: string[];
}
