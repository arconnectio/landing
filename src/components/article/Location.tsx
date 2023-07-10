import { ChevronRightIcon } from "@iconicicons/react";
import styled from "styled-components";
import Link from "next/link";

export default function Location() {
  return (
    <Wrapper>
      <LocationLink href="/help">
        Knowledge Base
      </LocationLink>
      <ChevronRightIcon />
      <LocationLink href="/help/getting-started">
        Getting started
      </LocationLink>
      <ChevronRightIcon />
      <LocationLink href="/help/article/1">
        Article name
      </LocationLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: .43rem;
  align-items: center;
  flex-wrap: wrap;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: rgb(${props => props.theme.secondaryText});
  }
`;

const LocationLink = styled(Link)`
  font-size: .95rem;
  font-weight: 550;
  color: rgb(${props => props.theme.accent});
  text-decoration: none;
  transition: all .17s ease;

  &:hover {
    opacity: .8;
  }
`;
