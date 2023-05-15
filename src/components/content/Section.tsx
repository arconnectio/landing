import styled from "styled-components";

const Section = styled.section<{ extraSpace?: boolean }>`
  padding: ${(props) => (props.extraSpace ? "3rem" : "1.3rem")} 10vw;

  @media screen and (max-width: 1050px) {
    padding: 3rem 5vw;
  }

  @media screen and (max-width: 900px) {
    padding: 3rem 8vw;
  }

  @media screen and (max-width: 720px) {
    padding: 2rem 7vw;
  }
`;

export default Section;
