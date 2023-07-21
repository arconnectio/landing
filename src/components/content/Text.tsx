import styled from "styled-components";

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

export const ParagraphTitle = styled.h3`
  font-size: 1.9rem;
  font-weight: 650;
  color: rgb(${(props) => props.theme.secondaryText});
  line-height: 1.1em;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 1.05rem;
  font-weight: 550;
  text-align: justify;
  margin: 0;
  color: rgb(${(props) => props.theme.secondaryText});
  line-height: 1.55em;
  width: auto;

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

export const Date = styled.div`
  display: flex;
  gap: 8px;
  padding: 7px 14px;
  background-color: #fff;
  border-radius: 36px;
  max-width: max-content;
`;
