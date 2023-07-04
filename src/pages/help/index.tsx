import { Space_Grotesk } from "next/font/google";
import Footer from "~/components/Footer";
import Spacer from "~/components/Spacer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "600"
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
  font-weight: 600;
  color: rgb(${props => props.theme.primaryText});
  text-align: center;
  margin: 0;
`;
