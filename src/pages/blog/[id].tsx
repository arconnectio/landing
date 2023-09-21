import Footer from "~/components/Footer";

import { ImageContainer, Title } from "./index";
import Section from "~/components/content/Section";
import Image from "next/image";
import Head from "~/components/Head";
import { useRouter } from "next/router";
import Nav from "~/components/Nav";
import { CalendarIcon } from "@iconicicons/react";
import { Date, Paragraph, Subtitle } from "~/components/content/Text";
import styled from "styled-components";
import { useEffect, useState } from "react";

type BlogData = {
  blogTitle: string;
  subtitle: string;
  author: string;
  datePublished: string;
  image: string;
  articleID: string;
  article: Array<{
    type: string;
    title: string;
    content: Array<{
      type: string;
      text?: string;
      items?: Array<string>;
    }>;
  }>;
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const blogId = id ? String(id) : null;

  const [blogData, setBlogData] = useState<BlogData | null>(null);

  useEffect(() => {
    if (blogId) {
      fetch(`/blog/blogData.json`)
        .then((response) => response.json())
        .then((data) => {
          const blogData = data[blogId];

          if (blogData) {
            setBlogData(blogData);
          }
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  }, [blogId]);

  return (
    <>
      {blogData && blogId && (
        <>
          <Head title="Blog - ArConnect Arweave Wallet" />
          <Nav />
          <main>
            <Section>
              <Date padding="17px 0px" secondary>
                <CalendarIcon />
                Jul 7, 2023
              </Date>
              <Title style={{ paddingBottom: "27px" }}>
                {blogData.blogTitle}
              </Title>
              <AuthorGroup>
                <Image
                  src="/logo.png"
                  alt="ArConnect hedgehog logo"
                  draggable={false}
                  width={56}
                  height={56}
                />
                <div>
                  <AuthorText>{blogData.author}</AuthorText>
                  <AuthorText secondary fontSize="16px" fontWeight={600}>
                    8 min read
                  </AuthorText>
                </div>
              </AuthorGroup>
              <ImageContainer style={{ padding: "57px 0" }}>
                <Image
                  src={blogData.image}
                  alt="Othent logo"
                  draggable={false}
                  width={468}
                  height={151}
                />
              </ImageContainer>
            </Section>
            <BlogSection>
              {blogData.article.map((section, indx) => (
                <div key={indx}>
                  {section.title && (
                    <BlogSubtitle>{section.title}</BlogSubtitle>
                  )}
                  {section.content.map((contentItem, contentIndex) => {
                    switch (contentItem.type) {
                      case "paragraph":
                        return (
                          <Paragraph key={contentIndex}>
                            {contentItem.text}
                          </Paragraph>
                        );
                      case "orderedList":
                        return (
                          <List unstyled>
                            {contentItem.items?.map((item, indx) => (
                              <ListItem key={indx}>{item}</ListItem>
                            ))}
                          </List>
                        );
                      case "unorderedList":
                        return (
                          <List>
                            {contentItem.items?.map((item, indx) => (
                              <ListItem key={indx}>{item} yo</ListItem>
                            ))}
                          </List>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              ))}
            </BlogSection>
          </main>
        </>
      )}
      <Footer />
    </>
  );
}

const List = styled.ul<{ unstyled?: boolean }>`
  list-style-type: ${(props) => props.unstyled && "none"};
`;

// TODO:
const ListItem = styled.li`
  ${Paragraph};
  font-size: 1.05rem;
  font-weight: 550;

  a {
    color: rgb(${(props) => props.theme.accent});
    text-decoration: none;
    cursor: pointer;
  }
`;

const BlogSubtitle = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  color: rgb(${(props) => props.theme.secondaryText});
  margin: 0;
`;

const BlogSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AuthorText = styled.p<{
  fontWeight?: number;
  fontSize?: string;
  secondary?: boolean;
}>`
  color: ${(props) =>
    props.secondary ? `rgb(${props.theme.secondaryText})` : "#000"};
  margin: 0;
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || 700};
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;
