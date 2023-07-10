import { ArrowUpRightIcon } from "@iconicicons/react";
import { Space_Grotesk } from "next/font/google";
import styled from "styled-components";
import Link from "next/link";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "600"
});

export default function Article({ id, title, description }: Props) {
  return (
    <Wrapper>
      <ArticleTitle>
        {title}
      </ArticleTitle>
      <ArticlePreview>
        {description}
      </ArticlePreview>
      <ArticleLink href={`/help/article/${id}`}>
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

const ArticleTitle = styled.h3`
  font-size: 1.55rem;
  font-weight: 600;
  color: rgb(${props => props.theme.accent});
  margin: 0;
  line-height: 1.1em;
`;

const ArticlePreview = styled.p`
  font-size: .95rem;
  font-weight: 600;
  line-height: 1.55em;
  color: rgba(${props => props.theme.secondaryText}, .8);
  margin: 0;
  text-align: justify;
`;

const ArticleLink = styled(Link)`
  ${spacegrotesk.style}
  display: flex;
  align-items: center;
  gap: .34rem;
  font-size: 1rem;
  color: rgb(${props => props.theme.secondaryText});
  text-decoration: none;
  transition: all .23s ease-in-out;

  &:hover {
    opacity: .77;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

interface Props {
  id: number;
  title: string;
  description: string;
}
