import { Articles, SectionTitle } from "~/components/article/Articles";
import { Description, Paragraph, ParagraphTitle, Title } from "~/components/content/Text";
import Location from "~/components/article/Location";
import Section from "~/components/content/Section";
import Article from "~/components/article/Article";
import { InboxIcon } from "@iconicicons/react";
import Help from "~/components/article/Help";
import Spacer from "~/components/Spacer";
import Footer from "~/components/Footer";
import styled from "styled-components";
import Head from "~/components/Head";
import Nav from "~/components/Nav";
import Link from "next/link"

export default function Topic({ article }: Props) {
  return (
    <>
      <Head title="Article title - ArConnect Arweave Wallet" />
      <Nav />
      <Main>
        <Section extraSpace>
          <Title>Article title</Title>
          <Spacer y={1} />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
            suscipit obcaecati distinctio ipsa dolores quam error ab quis earum
            mollitia deleniti culpa nostrum veniam a dolorem, ullam animi?
            Officiis.
          </Description>
          <Spacer y={1.35} />
          <Location />
        </Section>
        <ContentWrapper>
          <Content>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus, velit laudantium nulla suscipit dolorum ipsam est architecto maiores obcaecati consequuntur quae, quod exercitationem voluptatem. Nostrum quos consequatur error facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita quia praesentium odio, vel nihil recusandae itaque maxime, dicta illo obcaecati ullam quod labore quibusdam iusto optio debitis accusamus. Facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum ullam praesentium molestiae quis, eos repellat voluptate necessitatibus assumenda ea ex. Eos sapiente, enim dignissimos sint reprehenderit veritatis itaque assumenda!
            </Paragraph>
            <Spacer y={1.35} />
            <ParagraphTitle>
              Test
            </ParagraphTitle>
            <Spacer y={.8} />
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus, velit laudantium nulla suscipit dolorum ipsam est architecto maiores obcaecati consequuntur quae, quod exercitationem voluptatem. Nostrum quos consequatur error facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita quia praesentium odio, vel nihil recusandae itaque maxime, dicta illo obcaecati ullam quod labore quibusdam iusto optio debitis accusamus. Facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum ullam praesentium molestiae quis, eos repellat voluptate necessitatibus assumenda ea ex. Eos sapiente, enim dignissimos sint reprehenderit veritatis itaque assumenda!
            </Paragraph>
            <Spacer y={1.35} />
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus, velit laudantium nulla suscipit dolorum ipsam est architecto maiores obcaecati consequuntur quae, quod exercitationem voluptatem. Nostrum quos consequatur error facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita quia praesentium odio, vel nihil recusandae itaque maxime, dicta illo obcaecati ullam quod labore quibusdam iusto optio debitis accusamus. Facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum ullam praesentium molestiae quis, eos repellat voluptate necessitatibus assumenda ea ex. Eos sapiente, enim dignissimos sint reprehenderit veritatis itaque assumenda!
            </Paragraph>
            <Spacer y={1.35} />
            <ParagraphTitle>
              Test
            </ParagraphTitle>
            <Spacer y={.8} />
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus, velit laudantium nulla suscipit dolorum ipsam est architecto maiores obcaecati consequuntur quae, quod exercitationem voluptatem. Nostrum quos consequatur error facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita quia praesentium odio, vel nihil recusandae itaque maxime, dicta illo obcaecati ullam quod labore quibusdam iusto optio debitis accusamus. Facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum ullam praesentium molestiae quis, eos repellat voluptate necessitatibus assumenda ea ex. Eos sapiente, enim dignissimos sint reprehenderit veritatis itaque assumenda!
            </Paragraph>
          </Content>
          <ContentNavigator>
            <ContentNavigatorTitle>
              Content map
            </ContentNavigatorTitle>
            <ContentLink activeSection={true} href="#">
              Article name
            </ContentLink>
            <ContentLink href="#test">
              Test
            </ContentLink>
            <ContentLink href="#test">
              Test
            </ContentLink>
          </ContentNavigator>
        </ContentWrapper>
        <Spacer y={2.5} />
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
          </Articles>
        </Section>
        <Spacer y={3} />
        <Help />
        <Spacer y={2.5} />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 5.5rem;
  padding: 1.3rem 10vw;

  @media screen and (max-width: 1050px) {
    padding: 3rem 5vw;
    gap: 4.5rem;
  }

  @media screen and (max-width: 900px) {
    padding: 3rem 8vw;
    gap: 3rem;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 2rem 7vw;
  }
`;

const Content = styled.div`
  width: 70%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const ContentNavigator = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContentNavigatorTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  color: rgb(${props => props.theme.primaryText});
  margin: 0;
`;

const ContentLink = styled(Link)<{
  activeSection?: boolean;
}>`
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(${props => props.theme.accent}, .78);
  cursor: pointer;
  text-decoration: none;
  padding-left: 1.2rem;
  transition: all .17s ease;

  &:hover {
    color: rgba(${props => props.theme.accent}, 1);
  }

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    top: 50%;
    left: 0;
    background-color: rgba(${props => props.theme.accent}, ${props => props.activeSection ? ".78" : "0"});
    transform: translateY(-50%);
    transition: all .17s ease;
  }
`;

interface Props {
  article: string;
}
