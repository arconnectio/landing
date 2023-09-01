import { Description, ParagraphTitle, Title } from "~/components/content/Text";
import Application from "~/components/landing/Application";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Recover() {
  return (
    <>
      <Head title="Applications - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Recover wallet</Title>
          <Spacer y={1} />
          <Description>
            Older versions of ArConnect did verify that the input 12 word seedphrase did not include any extra line breaks. Unfortunately some applications (like Apple Notes), store text content such as seedphrases with an extra line break in the end. In older ArConnect versions this could have led to loading a corrupted wallet with a different address. These wallets are still useable, but cannot be loaded with the original seedphrase, without adding the extra linebreak at the end.
          </Description>
          <Spacer y={1.35} />
          <ParagraphTitle>
            Our advice
          </ParagraphTitle>
          <Spacer y={.85} />
          <Description>
            Use the following tool to load the corrupted wallet from the original seedphrase and download the generated JSON file containing the private key with your funds. Load the private key into ArConnect, by adding a new wallet in the settings or during setup, then <i><b>transfer your funds to a freshly generated wallet</b></i>.<br />This will allow you to use a newly generated, correct seedphrase. Alternatively, you can still access your old wallet with the downloaded keyfile.
          </Description>
        </Section>

        <Background />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

