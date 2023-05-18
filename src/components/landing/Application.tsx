import { Space_Grotesk } from "next/font/google";
import TwitterIcon from "../social/TwitterIcon";
import DiscordIcon from "../social/DiscordIcon";
import { GlobeIcon } from "@iconicicons/react";
import GithubIcon from "../social/GithubIcon";
import styled from "styled-components";
import Image from "next/image";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500"
});

const Application = ({
  name,
  category,
  description,
  assets,
  links
}: IApplication) => (
  <AppWrapper>
    <ThumbnailWrapper>
      <Thumbnail
        src={assets.thumbnail}
        alt={`${name} thumbnail`}
        width={512}
        height={422}
        draggable={false}
      />
    </ThumbnailWrapper>
    <AppData>
      <AppName>
        {name}
      </AppName>
      <AppDescription>{description}</AppDescription>
      <Socials>
        {links.website && (
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
    </AppData>
  </AppWrapper>
);

const smallSpace = "1.2rem";

const AppWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 14fr 30fr;
  grid-template-rows: 1fr;
  border-radius: 25px;
  background-color: rgb(${(props) => props.theme.background});
  overflow: hidden;
  text-decoration: none;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Thumbnail = styled(Image)`
  position: absolute;
  object-fit: contain;
  user-select: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const AppData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem ${smallSpace};
`;

const AppName = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.1em;
  color: rgb(${(props) => props.theme.primaryText});
  font-weight: 650;
  margin: 0;
  gap: 0.4rem;
`;

const AppDescription = styled.p`
  ${spacegrotesk.style}
  font-size: .8rem;
  color: rgb(174, 173, 205);
  margin: 0;
  text-align: justify;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding-top: .15rem;
`;

const SocialLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})<{ site?: boolean }>`
  display: flex;
  font-size: 1.2rem;
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

export default Application;
