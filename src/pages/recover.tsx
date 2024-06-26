import {
  Description,
  Paragraph,
  ParagraphTitle,
  Title
} from "~/components/content/Text";
import { getKeyFromMnemonic } from "arweave-mnemonic-keys";
import Background from "~/components/landing/Background";
import Section from "~/components/content/Section";
import { WalletIcon } from "@iconicicons/react";
import { downloadFile } from "~/utils/file";
import Loading from "~/components/Loading";
import { Manrope } from "next/font/google";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import { useState } from "react";

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

      downloadFile(
        JSON.stringify(key, null, 2),
        "application/json",
        "private-key.json"
      );
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
            Older versions of ArConnect didn't verify that the input 12 word
            seedphrase did not include any extra line breaks. Unfortunately,
            some applications (like Apple Notes), store text content such as
            seedphrases with an extra line break in the end. In older ArConnect
            versions, this could have led to loading a corrupted wallet with a
            different address. These wallets are still useable, but cannot be
            loaded with the original seedphrase, without adding the extra
            linebreak at the end.
          </Description>
          <Spacer y={1.5} />
          <ParagraphTitle>Our advice</ParagraphTitle>
          <Spacer y={0.85} />
          <Description>
            Use the following tool to load the corrupted wallet from the
            original seedphrase and download the generated JSON file containing
            the private key with your funds. Load the private key into
            ArConnect, by adding a new wallet in the settings or during setup,
            then{" "}
            <i>
              <b>transfer your funds to a freshly generated wallet</b>
            </i>
            .<br />
            This will allow you to use a newly generated, correct seedphrase.
            Alternatively, you can still access your old wallet with the
            downloaded keyfile.
          </Description>
          <Spacer y={1.5} />
          <ParagraphTitle>What this tool is not</ParagraphTitle>
          <Spacer y={0.85} />
          <Description>
            This tool does not exist to recover forgotten or lost private
            keys/seedphrases. Our team does not have access to your wallet, so
            we cannot help you to recover that.
          </Description>
        </Section>
        <Section>
          <SeedArea
            placeholder="Enter seedphrase..."
            disabled={loading}
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
          ></SeedArea>
          <Spacer y={1.25} />
          <ButtonWithText>
            <Button onClick={recover}>
              Recover
              {(loading && <Loading />) || <WalletIcon />}
            </Button>
            {loading && (
              <LoadingText>This might take a couple of seconds...</LoadingText>
            )}
          </ButtonWithText>
        </Section>
        <Section>
          <Description>
            You can validate the recovery tool or run it yourself at the{" "}
            <a
              href="https://github.com/arconnectio/landing/pull/5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repository
            </a>
            .
          </Description>
          <Spacer y={1.5} />
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
  border: 1.75px solid rgb(${(props) => props.theme.secondaryText}, 0.2);
  color: rgb(${(props) => props.theme.secondaryText});
  border-radius: 18px;
  padding: 0.7rem 1.1rem;
  transition: all 0.17s ease-in-out;
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
    color: rgb(${(props) => props.theme.secondaryText}, 0.2);
  }

  &:focus {
    border-color: rgb(${(props) => props.theme.accent});
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const ButtonWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LoadingText = styled(Paragraph)`
  color: rgba(${(props) => props.theme.secondaryText}, 0.75);
`;
