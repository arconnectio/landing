import { Manrope, Space_Grotesk } from "next/font/google";
import { SearchIcon } from "@iconicicons/react";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "600"
});
const manrope = Manrope({
  subsets: ["latin"]
});

export default function Help() {
  return (
    <>
      <Head title="Help - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Spacer y={2} />
        <TitleSection>
          <Question>
            How can we help?
          </Question>
          <Title>
            Knowledge Base
          </Title>
          <Spacer y={1.6} />
          <SearchBox>
            <SearchInput type="text" placeholder="Search for questions, articles or keywords..." />
            <SearchIcon />
          </SearchBox>
        </TitleSection>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

const TitleSection = styled.section`
  margin: 0 5.75rem;
  padding: 4rem 0;
  background-color: rgba(${props => props.theme.accent}, .2);
  border-radius: 40px;

  @media screen and (max-width: 720px) {
    margin: 0 2rem;
    padding: 1.5rem 0;
  }
`;

const Question = styled.p`
  ${spacegrotesk.style}
  font-size: 1.45rem;
  color: rgb(${props => props.theme.accent});
  text-align: center;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 2.85rem;
  font-weight: 700;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
`;

const SearchBox = styled.div`
  position: relative;
  width: max-content;
  background-color: rgb(${props => props.theme.background});
  overflow: hidden;
  border-radius: 14px;
  margin: 0 auto;
  z-index: 1;

  svg {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 2;
    color: rgba(${(props) => props.theme.secondaryText}, 0.45);
    transform: translateY(-50%);
  }
`;

const SearchInput = styled.input`
  ${manrope.style}
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 1.2rem 1rem;
  padding-left: calc(1rem * 2 + 1.5rem);
  z-index: 3;
  width: 500px;
  color: rgb(${(props) => props.theme.secondaryText});

  &::placeholder {
    color: rgba(${(props) => props.theme.secondaryText}, 0.45);
  }
`;
