import { ArrowUpRightIcon } from "@iconicicons/react";
import { Space_Grotesk } from "next/font/google";
import styled from "styled-components";
import Link from "next/link";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "600"
});

export default function Article({
  slug,
  title,
  description,
  baseLink = "/help/article",
  coverImage,
  author
}: ArticleProps) {
  return (
    <Wrapper>
      <TitleWrapperLink href={`${baseLink}/${slug}`}>
        {coverImage && <CoverImage src={coverImage} />}
        {author && (
          <Author>
            <AuthorPfp src={author.picture || "/logo.png"} />
            <AuthorName>
              {"by " + author.name}
            </AuthorName>
          </Author>
        )}
        <ArticleTitle>{title}</ArticleTitle>
      </TitleWrapperLink>
      <ArticlePreview>{description}</ArticlePreview>
      <ArticleLink href={`${baseLink}/${slug}`}>
        Read more
        <ArrowUpRightIcon />
      </ArticleLink>
    </Wrapper>
  );
}

const Wrapper = styled.article` 
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleWrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  text-decoration: none;
`;

const ArticleTitle = styled.h3`
  font-size: 1.55rem;
  font-weight: 600;
  color: rgb(${(props) => props.theme.accent});
  margin: 0;
  line-height: 1.1em;
`;

const ArticlePreview = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.55em;
  color: rgba(${(props) => props.theme.secondaryText}, 0.8);
  margin: 0;
  text-align: justify;
`;

const ArticleLink = styled(Link)`
  ${spacegrotesk.style}
  display: flex;
  align-items: center;
  gap: 0.34rem;
  font-size: 1rem;
  color: rgb(${(props) => props.theme.secondaryText});
  text-decoration: none;
  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.77;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const CoverImage = styled.img.attrs({
  dragable: false,
  alt: "Cover image"
})`
  display: block;
  width: 100%;
  height: 170px;
  object-fit: cover;
  user-select: none;
  object-position: center;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
`;

const AuthorPfp = styled.img.attrs({
  draggable: false,
  alt: "profile picture"
})`
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 100%;
  user-select: none;
`;

const AuthorName = styled(ArticlePreview)`
  font-size: .84rem;
  text-align: left;
  color: rgb(${props => props.theme.primaryText});
  line-height: 1.2em;
`;

export interface ArticleProps {
  slug: string;
  title: string;
  description: string;
  baseLink?: string;
  coverImage?: string;
  author?: {
    name: string;
    picture: string;
  };
}
