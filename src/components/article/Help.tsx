import { ArrowRightIcon, HelpIcon } from "@iconicicons/react";
import { SectionTitle } from "~/components/article/Articles";
import { Description } from "~/components/content/Text";
import { Space_Grotesk } from "next/font/google";
import Spacer from "~/components/Spacer";
import Button from "~/components/Button";
import styled from "styled-components";
import Image from "next/image";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "600"
});

export default function Help() {
  return (
    <Wrapper>
      <Title>
        <HelpIcon />
        Still need help?
      </Title>
      <Spacer y={1.4} />
      <Description>
        If you haven't found help in our knowledge base, you might have
        encountered an issue we haven't heard about yet. Do not panic, we're
        still here to help! Below you can seek support from our team directly on
        Discord.
      </Description>
      <Spacer y={2} />
      <Button href={"/discord"}>
        Get help
        <ArrowRightIcon />
      </Button>
      <HelpImage
        src="/help.png"
        alt="Help Rubber Ring"
        draggable={false}
        width={554}
        height={478}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin: 0 5.75rem;
  padding: 3.3rem 3.7rem;
  background-color: rgba(${(props) => props.theme.accent}, 0.2);
  border-radius: 40px;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    margin: 0 1.25rem;
    padding: 2.3rem;
    border-radius: 30px;
  }
`;

const Title = styled(SectionTitle)`
  ${spacegrotesk.style}
  gap: 1rem;
  font-size: 2.2rem;

  @media screen and (max-width: 720px) {
    font-size: 1.8rem;
  }
`;

const HelpImage = styled(Image)`
  position: absolute;
  right: -10%;
  bottom: -18%;
  user-select: none;

  @media screen and (max-width: 1260px) {
    right: -20%;
  }

  @media screen and (max-width: 1090px) {
    right: -40%;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
