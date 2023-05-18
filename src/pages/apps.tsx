import { Description, Title } from "~/components/content/Text"
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Image from "next/image";
import Application from "~/components/landing/Application"

export default function Apps() {
  return (
    <>
      <Head title="Applications - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Applications</Title>
          <Spacer y={1} />
          <Description>
            Here is a list of applications that support ArConnect. Remember this might not be a complete list, as it is community maintained. You can add your application to the list by <a href="https://github.com/arconnectio/landing/issues/new" target="_blank" rel="noopener noreferrer">creating an issue</a>.
          </Description>
        </Section>
        <AppsSection>
          <Application name="ArDrive" category="Storage" description="ArDrive offers never-ending storage of your most valuable files. Pay once and save your memories forever." logo="/apps/ardrive/logo.png" thumbnail="/apps/ardrive/thumbnail.png" links={{ website: "https://ardrive.io", twitter: "https://twitter.com/ardriveapp", discord: "https://discord.com/invite/ya4hf2H", github: "https://github.com/ardriveapp" }} />
        </AppsSection>
        <Background />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

const AppsSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 1.9rem;
  padding-bottom: 3.5rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
