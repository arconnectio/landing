import Hero from "~/components/landing/Hero";
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
        <Hero />
      </main>
    </>
  );
}
