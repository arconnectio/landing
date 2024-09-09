import { Application as ApplicationInterface } from "../../utils/apps";
import { ArrowUpRightIcon, GlobeIcon } from "@iconicicons/react";
import { Space_Grotesk } from "next/font/google";
import TwitterIcon from "../social/TwitterIcon";
import DiscordIcon from "../social/DiscordIcon";
import GithubIcon from "../social/GithubIcon";
import styled, { css } from "styled-components";

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
  <ApplicationWrapper>
    <Thumbnail>
      <ThumbnailImage src={!full ? assets.logo : assets.thumbnail} alt={name} />
    </Thumbnail>
    <Body>
      <ContentWrapper>
        <TitleRow>
          <Title>{name}</Title>
          <CategoryTag>{category}</CategoryTag>
        </TitleRow>
        <Description>{description}</Description>
        <SocialLinks>
          {links.twitter && (
            <SocialLink href={links.twitter} site="twitter">
              <IconWrapper>
                <TwitterIcon />
              </IconWrapper>
            </SocialLink>
          )}
          {links.discord && (
            <SocialLink href={links.discord} site="discord">
              <IconWrapper>
                <DiscordIcon />
              </IconWrapper>
            </SocialLink>
          )}
          {links.github && (
            <SocialLink href={links.github} site="github">
              <IconWrapper>
                <GithubIcon />
              </IconWrapper>
            </SocialLink>
          )}
        </SocialLinks>
      </ContentWrapper>
      <Button href={links.website}>
        Learn more <ArrowUpRightIcon />
      </Button>
    </Body>
  </ApplicationWrapper>
);

const Body = styled.div`
  height: 212px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const TitleRow = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.25em;
  margin: 0;
  font-weight: 700;
`;

const CategoryTag = styled.span`
  background: rgba(171, 154, 255, 0.1);
  color: #ab9aff;
  padding: 0.25em 0.5em;
  border-radius: 1em;
  border: 1px solid rgba(171, 154, 255, 0.5);
  font-size: 0.875em;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75em;
  margin-top: 0.5em;
`;

const SocialLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})<{ site: string }>`
  color: #6e6e6e;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-decoration: none;
  padding: 0.75em 1.5em;
  font-size: 1em;
  background-color: #a388ff;
  color: white;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
  align-self: stretch;
`;

const ApplicationWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: white;
  width: 100%;
  max-width: 425px;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 220px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow: hidden;
  position: relative;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

interface Props extends ApplicationInterface {
  full?: boolean;
  category: string;
}

export default Application;
