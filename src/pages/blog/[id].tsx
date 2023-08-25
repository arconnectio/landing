import Footer from "~/components/Footer";

import { ImageContainer, Title, Wrapper } from "./index";
import Section from "~/components/content/Section";
import Image from "next/image";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import { CalendarIcon } from "@iconicicons/react";
import { Date, Paragraph, Subtitle } from "~/components/content/Text";
import styled from "styled-components";

export default function BlogPost() {
  return (
    <>
      <Head title="Blog - ArConnect Arweave Wallet" />
      <Nav />
      <main>
        <Section>
          <Date padding="17px 0px" secondary>
            <CalendarIcon />
            Jul 7, 2023
          </Date>
          <Title style={{ paddingBottom: "27px" }}>
            ArConnect adds support for Google Accounts through Othent.
          </Title>
          <AuthorGroup>
            <Image
              src="/logo.png"
              alt="ArConnect hedgehog logo"
              draggable={false}
              width={56}
              height={56}
            />
            <div>
              <AuthorText>Marton Lederer</AuthorText>
              <AuthorText secondary fontSize="16px" fontWeight={600}>
                8 min read
              </AuthorText>
            </div>
          </AuthorGroup>
          <ImageContainer style={{ padding: "57px 0" }}>
            <Image
              src="/OthentExample.png"
              alt="Othent logo"
              draggable={false}
              width={468}
              height={151}
            />
          </ImageContainer>
        </Section>
        <BlogSection>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Lacinia congue risus turpis
            ullamcorper cursus mattis. Nunc tellus euismod nisl aliquam
            maecenas. Ornare feugiat urna integer in mauris lacinia ut eu.
            Adipiscing scelerisque sapien id nunc. Ultrices nisl etiam
            adipiscing eu arcu vitae nisi. Risus aliquet nisl turpis suspendisse
            at ut elementum at. Malesuada nec morbi sed felis. Odio sit sed non
            sed facilisi morbi venenatis pretium donec. Erat quis ut sit neque
            volutpat.
          </Paragraph>
          <BlogSubtitle>This is a subtitle</BlogSubtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Lacinia congue risus turpis
            ullamcorper cursus mattis. Nunc tellus euismod nisl aliquam
            maecenas. Ornare feugiat urna integer in mauris lacinia ut eu.
            Adipiscing scelerisque sapien id nunc. Ultrices nisl etiam
            adipiscing eu arcu vitae nisi. Risus aliquet nisl turpis suspendisse
            at ut elementum at. Malesuada nec morbi sed felis. Odio sit sed non
            sed facilisi morbi venenatis pretium donec. Erat quis ut sit neque
            volutpat. Lorem ipsum dolor sit amet consectetur. Lacinia congue
            risus turpis ullamcorper cursus mattis. Nunc tellus euismod nisl
            aliquam maecenas. Ornare feugiat urna integer in mauris lacinia ut
            eu. Adipiscing scelerisque sapien id nunc. Ultrices nisl etiam
            adipiscing eu arcu vitae nisi. Risus aliquet nisl turpis suspendisse
            at ut elementum at. Malesuada nec morbi sed felis. Odio sit sed non
            sed facilisi morbi venenatis pretium donec. Erat quis ut sit neque
            volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Lacinia congue risus turpis
            ullamcorper cursus mattis. Nunc tellus euismod nisl aliquam
            maecenas. Ornare feugiat urna integer in mauris lacinia ut eu.
            Adipiscing scelerisque sapien id nunc. Ultrices nisl etiam
            adipiscing eu arcu vitae nisi. Risus aliquet nisl turpis suspendisse
            at ut elementum at. Malesuada nec morbi sed felis. Odio sit sed non
            sed facilisi morbi venenatis pretium donec. Erat quis ut sit neque
            volutpat.
          </Paragraph>
        </BlogSection>
      </main>
      <Footer />
    </>
  );
}

const BlogSubtitle = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  color: rgb(${(props) => props.theme.secondaryText});
  margin: 0;
`;

const BlogSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AuthorText = styled.p<{
  fontWeight?: number;
  fontSize?: string;
  secondary?: boolean;
}>`
  color: ${(props) =>
    props.secondary ? `rgb(${props.theme.secondaryText})` : "#000"};
  margin: 0;
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || 700};
`;

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;
