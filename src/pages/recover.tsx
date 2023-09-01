import { Description, ParagraphTitle, Title } from "~/components/content/Text";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import { WalletIcon } from "@iconicicons/react";
import { Manrope } from "next/font/google";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

const manrope = Manrope({ subsets: ["latin"] });

export default function Recover() {
  return (
    <>
      <Head title="Recover corrupt seedphrase - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Recover wallet</Title>
          <Spacer y={1} />
          <Description>
            Older versions of ArConnect did't verify that the input 12 word seedphrase did not include any extra line breaks. Unfortunately some applications (like Apple Notes), store text content such as seedphrases with an extra line break in the end. In older ArConnect versions this could have led to loading a corrupted wallet with a different address. These wallets are still useable, but cannot be loaded with the original seedphrase, without adding the extra linebreak at the end.
          </Description>
          <Spacer y={1.5} />
          <ParagraphTitle>
            Our advice
          </ParagraphTitle>
          <Spacer y={.85} />
          <Description>
            Use the following tool to load the corrupted wallet from the original seedphrase and download the generated JSON file containing the private key with your funds. Load the private key into ArConnect, by adding a new wallet in the settings or during setup, then <i><b>transfer your funds to a freshly generated wallet</b></i>.<br />This will allow you to use a newly generated, correct seedphrase. Alternatively, you can still access your old wallet with the downloaded keyfile.
          </Description>
        </Section>
        <Section>
          <SeedArea placeholder="Enter seedphrase..."></SeedArea>
          <Spacer y={1.25} />
          <Button>
            Recover
            <WalletIcon />
          </Button>
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

const SeedArea = styled.textarea`
  background-color: transparent;
  outline: none;
  border: 1.75px solid rgb(${props => props.theme.secondaryText}, .2);
  color: rgb(${props => props.theme.secondaryText});
  border-radius: 18px;
  padding: .7rem 1.1rem;
  transition: all .17s ease-in-out;
  ${manrope.style}
  font-size: .95rem;
  font-weight: 550;
  line-height: 1.55em;
  resize: none;
  width: 500px;
  height: 160px;

  &::placeholder {
    color: rgb(${props => props.theme.secondaryText}, .2);
  }

  &:focus {
    border-color: rgb(${props => props.theme.accent});
  }
`;
