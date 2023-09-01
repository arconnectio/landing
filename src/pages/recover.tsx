import { Description, ParagraphTitle, Title } from "~/components/content/Text";
import { getKeyFromMnemonic } from "arweave-mnemonic-keys";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import { WalletIcon } from "@iconicicons/react";
import Loading from "~/components/Loading";
import { Manrope } from "next/font/google";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import { useState } from "react";
import { downloadFile } from "~/utils/file"

const manrope = Manrope({ subsets: ["latin"] });

export default function Recover() {
  const [loading, setLoading] = useState(false);
  const [mnemonic, setMnemonic] = useState<string>();

  async function recover() {
    if (!mnemonic) return;
    setLoading(true);

    try {
      const words = mnemonic.replace(/\n/g, "").split(" ");
      const key = await getKeyFromMnemonic(words.join(" ") + "\n");

      downloadFile(JSON.stringify(key, null, 2), "application/json", "private-key.json");
      setMnemonic(undefined);
    } catch {}

    setLoading(false);
  }

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
          <SeedArea placeholder="Enter seedphrase..." disabled={loading} value={mnemonic} onChange={(e) => setMnemonic(e.target.value)}></SeedArea>
          <Spacer y={1.25} />
          <Button onClick={recover}>
            Recover
            {(loading && <Loading />) || <WalletIcon />}
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

  @media screen and (max-width: 720px) {
    width: calc(100% - 1.1rem * 2);
  }

  &::placeholder {
    color: rgb(${props => props.theme.secondaryText}, .2);
  }

  &:focus {
    border-color: rgb(${props => props.theme.accent});
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .7;
  }
`;
