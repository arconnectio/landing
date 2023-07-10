import { Articles, SectionTitle } from "~/components/artcile/Articles";
import { Description, Title } from "~/components/content/Text";
import Section from "~/components/content/Section";
import Article from "~/components/artcile/Article";
import { InboxIcon } from "@iconicicons/react";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";

export default function Topic({ topic }: Props) {
  return (
    <>
      <Head title="Topic Name Help - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Topic Name</Title>
          <Spacer y={1} />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id suscipit obcaecati distinctio ipsa dolores quam error ab quis earum mollitia deleniti culpa nostrum veniam a dolorem, ullam animi? Officiis.
          </Description>
        </Section>
        <Section>
          <SectionTitle>
            <InboxIcon />
            Related articles
          </SectionTitle>
          <Spacer y={2.4} />
          <Articles>
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
            <Article
              id={1}
              title="This is the article title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a ut aliquam maxime assumenda dolor veritatis non blanditiis eos, quisquam facere rem accusantium, error praesentium suscipit eligendi unde ducimus deserunt."
            />
          </Articles>
        </Section>
        <Spacer y={2.5} />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

interface Props {
  topic: string;
}
