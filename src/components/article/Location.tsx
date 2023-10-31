import { ChevronRightIcon } from "@iconicicons/react";
import styled from "styled-components";
import Link from "next/link";

export default function Location({ category, article }: Props) {
  return (
    <Wrapper>
      <LocationLink href="/help">Knowledge Base</LocationLink>
      <ChevronRightIcon />
      <LocationLink href={`/help/topic/${category.slug}`}>
        {category.name}
      </LocationLink>
      {article && (
        <>
          <ChevronRightIcon />
          <LocationLink href={`/help/article/${article.slug}`}>
            {article.name}
          </LocationLink>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.43rem;
  align-items: center;
  flex-wrap: wrap;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: rgb(${(props) => props.theme.secondaryText});
  }
`;

const LocationLink = styled(Link)`
  font-size: 0.95rem;
  font-weight: 550;
  color: rgb(${(props) => props.theme.accent});
  text-decoration: none;
  transition: all 0.17s ease;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  article?: Property;
  category: Property;
}

interface Property {
  slug: string;
  name: string;
}
