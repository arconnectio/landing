import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 3.35rem;
  font-weight: 650;
  color: rgb(${(props) => props.theme.accent});
  margin: 0;
  line-height: 1.25em;

  @media screen and (max-width: 720px) {
    margin-top: 4rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.65rem;
  font-weight: 650;
  color: rgb(${(props) => props.theme.secondaryText});
  line-height: 1.1em;
  margin: 0;
`;

export const paragraphTitleStyles = css`
  font-size: 1.9rem;
  font-weight: 650;
  line-height: 1.1em;
`;

export const ParagraphTitle = styled.h3`
  font-size: 1.9rem;
  margin: 0;
  ${paragraphTitleStyles}
`;

export const paragraphStyles = css`
  font-size: 1.05rem;
  font-weight: 550;
  text-align: justify;
  line-height: 1.55em;
  width: auto;
`;

export const Paragraph = styled.p`
  ${paragraphStyles}
  margin: 0;
  color: rgb(${(props) => props.theme.secondaryText});

  a {
    color: rgb(${(props) => props.theme.accent});
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Description = styled(Paragraph)`
  width: 42vw;

  @media screen and (max-width: 720px) {
    width: auto;
  }
`;

export const Date = styled.p`
  display: flex;
  font-size: 1rem;
  gap: 0.75rem;
  align-items: center;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  color: rgb(${(props) => props.theme.secondaryText});
`;
