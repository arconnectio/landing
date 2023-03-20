import styled, { css } from "styled-components";
import Spacer from "~/components/Spacer";
import Nav from "~/components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="ArConnect is the first wallet for Arweave, providing secure wallet and asset management" />
        <title>ArConnect - Arweave Wallet</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ArConnect - Arweave Wallet" />
        <meta name="twitter:site" content="@arconnectio" />
        <meta name="twitter:description" content="ArConnect is the first wallet for Arweave, providing secure wallet and asset management" />
        <meta name="twitter:image" content="https://arconnect.io/og.png" />
        <meta name="twitter:image:alt" content="ArConnect is the first wallet for Arweave, providing secure wallet and asset management" />

        <meta property="og:title" content="ArConnect - Arweave Wallet" />
        <meta property="og:description" content="ArConnect is the first wallet for Arweave, providing secure wallet and asset management" />
        <meta property="og:url" content="https://arconnect.io" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://arconnect.io/og.png" />
        <meta property="og:image:alt" content="ArConnect is the first wallet for Arweave, providing secure wallet and asset management" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="ArConnect" />
      </Head>
      <Nav />
      <main>
        <Hero>
          <HeroTitle>
            The only Arweave wallet
          </HeroTitle>
          <Spacer y={.75} />
          <HeroSubtitle>
            You’ll ever need
          </HeroSubtitle>
          <Spacer y={1.9} />
          <HeroDescription>
            ArConnect is an Arweave-native wallet extension that provides secure wallet management other things blah blab.
          </HeroDescription>
        </Hero>
      </main>
    </>
  );
}

const Hero = styled.section`
  padding: 7rem 0 0;
`;

const heroText = css`
  font-size: 5.5rem;
  font-weight: 800;
  text-align: center;
  margin: 0;
  line-height: 1.1em;
`;

const HeroTitle = styled.h1`
  color: rgb(${props => props.theme.accent});
  ${heroText}
`;

const HeroSubtitle = styled.h2`
  color: rgb(${props => props.theme.secondaryText});
  ${heroText}
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: rgb(${props => props.theme.secondaryText});
  margin: 0 auto;
  max-width: 60%;
`;