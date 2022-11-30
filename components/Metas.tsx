import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  largeImage?: boolean;
}

const Metas = ({ title, description, image, largeImage }: Props) => {
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <link rel="shortcut icon" href={image} />
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
          {largeImage && (
            <meta name="twitter:card" content="summary_large_image" />
          )}
        </>
      )}
    </Head>
  );
};

export default Metas;