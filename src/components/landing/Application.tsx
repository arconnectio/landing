import { ArrowRightIcon, GlobeIcon } from "@iconicicons/react";
import { Space_Grotesk } from "next/font/google";
import TwitterIcon from "../social/TwitterIcon";
import DiscordIcon from "../social/DiscordIcon";
import GithubIcon from "../social/GithubIcon";
import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400"
});

const Application = ({
  name,
  category,
  description,
  assets,
  links,
  full = false
}: Props) => (
  <AppWrapper big={full}>
    <ThumbnailWrapper big={full}>
      <Thumbnail
        src={assets.thumbnail}
        alt={`${name} thumbnail`}
        draggable={false}
      />
    </ThumbnailWrapper>
    <Content big={full}>
    <AppData>
      {full && <AppLogo src={assets.logo} width={1028} height={1028} alt={`${name} logo`} />}
      <AppName big={full}>
        {name}
      </AppName>
      <AppDescription big={full}>{description}</AppDescription>
      </AppData>
      <Footer>
        <Socials big={full}>
          {links.website && !full && (
            <SocialLink href={links.website} site>
              <GlobeIcon />
            </SocialLink>
          )}
          {links.twitter && (
            <SocialLink href={links.twitter}>
              <TwitterIcon />
            </SocialLink>
          )}
          {links.discord && (
            <SocialLink href={links.discord}>
              <DiscordIcon />
            </SocialLink>
          )}
          {links.github && (
            <SocialLink href={links.github}>
              <GithubIcon />
            </SocialLink>
          )}
        </Socials>
        {full && (
          <Button href={links.website} target="_blank" rel="noopener noreferer">
            Learn more
            <ArrowRightIcon />
          </Button>
        )}
      </Footer>
    
    </Content>
  </AppWrapper>
);

const smallSpace = "1.2rem";
const largeSpace = "2.6rem";

const AppWrapper = styled.div<{ big?: boolean; }>`
  display: grid;
  align-items: center;
  grid-template-columns: ${props => props.big ? "20fr 28fr" : "14fr 30fr"};
  grid-template-rows: 1fr;
  border-radius: ${props => props.big ? "45px" : "25px"};
  background-color: rgb(${(props) => props.theme.background});
  overflow: hidden;
  text-decoration: none;
  ${props => props.big ? "height: 330px;" : ""}
`;

const ThumbnailWrapper = styled.div<{ big?: boolean; }>`
  position: relative;
  height: 100%;
`;

const Thumbnail = styled.img`
  position: absolute;
  object-fit: cover;
  user-select: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div<{ big?: boolean; }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.65rem;
  padding: ${props => props.big ? "1.5rem" : "1rem"} ${props => props.big ? largeSpace : smallSpace};
  ${props => props.big ? "height: calc(100% - 3rem);" : ""}
`;

const AppData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AppLogo = styled(Image).attrs({
  draggable: false
})`
  user-select: none;
  width: 2.35rem;
  height: 2.35rem;
  object-fit: contain;
`;

const AppName = styled.h2<{ big?: boolean; }>`
  display: flex;
  align-items: center;
  font-size: ${props => props.big ? "1.85rem" : "1.5rem"};
  line-height: 1.1em;
  color: rgb(${(props) => props.theme.primaryText});
  font-weight: 650;
  margin: 0;
  gap: 0.4rem;
`;

const AppDescription = styled.p<{ big?: boolean; }>`
  ${spacegrotesk.style}
  font-size: ${props => props.big ? "1rem" : ".8rem"};
  color: rgb(174, 173, 205);
  margin: 0;
  text-align: justify;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Socials = styled.div<{ big?: boolean; }>`
  display: flex;
  align-items: center;
  gap: ${props => props.big ? "0.9rem" : "0.7rem"};

  a {
    font-size: ${props => props.big ? "1.5rem" : "1.2rem"};
  }
`;

const SocialLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})<{ site?: boolean }>`
  display: flex;
  text-decoration: none;
  color: rgb(${(props) => props.theme.accent});
  transition: all 0.23s ease-in-out;

  svg {
    font-size: ${(props) => (props.site ? "1em" : ".77em")};
    width: 1em;
    height: 1em;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export interface IApplication {
  name: string;
  category: string;
  description: string;
  assets: {
    logo: string;
    thumbnail: string;
  };
  links: {
    website?: string;
    discord?: string;
    twitter?: string;
    github?: string;
  };
}

interface Props extends IApplication {
  full?: boolean;
}

export default Application;
