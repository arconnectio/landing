import { PropsWithChildren } from "react";
import NextHead from "next/head";

export default function Head({
  children,
  title = "ArConnect - Arweave Wallet",
  description = "ArConnect is the first wallet made for Arweave, providing secure wallet and asset management",
  image = "https://arconnect.io/og.png"
}: PropsWithChildren<Props>) {
  return (
    <NextHead>
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@arconnectio" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://arconnect.io" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="en_IE" />
      <meta property="og:site_name" content="ArConnect" />
      {children}
    </NextHead>
  );
}

interface Props {
  title?: string;
  description?: string;
  image?: string;
}
