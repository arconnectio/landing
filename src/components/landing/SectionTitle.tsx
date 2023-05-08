import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-weight: 750;
  line-height: 1.15em;
  color: rgb(${(props) => props.theme.accent});
  margin: 0;

  span {
    display: block;
    color: rgb(${(props) => props.theme.secondaryText});
  }

  @media screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`;

export default SectionTitle;
