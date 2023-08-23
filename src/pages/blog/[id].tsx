import Footer from "~/components/Footer";

import { ImageContainer, Title, Wrapper } from "./index";
import Section from "~/components/content/Section";
import Image from "next/image";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

import { CalendarIcon } from "@iconicicons/react";
import { Date, Paragraph, Subtitle } from "~/components/content/Text";
import styled from "styled-components";
import Spacer from "~/components/Spacer";

export default function BlogPost() {
  return (
    <>
      <Head title="Blog - ArConnect Arweave Wallet" />
      <Nav />
      <main>
        <Section>
          <Date>
            <CalendarIcon />
            Jul 7, 2023
          </Date>
          <Title>
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
              <div>Marton Lederer</div>
              <div>6 min read</div>
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
        <Section
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
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
          <Subtitle>This is a subtitle</Subtitle>
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
        </Section>
      </main>
      <Footer />
    </>
  );
}

const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;