import TwitterIcon from "./social/TwitterIcon";
import DiscordIcon from "./social/DiscordIcon";
import GithubIcon from "./social/GithubIcon";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <LeftSection>
          <LogoWrapper>
            <Image
              src="/logo.png"
              alt="ArConnect hedgehog logo"
              draggable={false}
              width={512}
              height={512}
            />
            <LogoText>
              ArConnect
            </LogoText>
          </LogoWrapper>
          <Socials>
            <Social>
              <TwitterIcon />
            </Social>
            <Social>
              <DiscordIcon />
            </Social>
            <Social>
              <GithubIcon />
            </Social>
          </Socials>
        </LeftSection>
        <Links>
          <LinkColumn>
            <ColumnTitle>
              About
            </ColumnTitle>
            <Link href="/">
              Home
            </Link>
            <a href="" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
            <Link href="/branding">
              Branding
            </Link>
          </LinkColumn>
          <LinkColumn>
            <ColumnTitle>
              Help
            </ColumnTitle>
            <a href="" target="_blank" rel="noopener noreferrer">
              Chat
            </a>
            <Link href="/faq">
              FAQ
            </Link>
          </LinkColumn>
          <LinkColumn>
            <ColumnTitle>
              Developers
            </ColumnTitle>
            <Link href="/">
              Kit
            </Link>
            <a href="" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </LinkColumn>
        </Links>
      </Content>
      <CopyrightSection>
        Copyright © {new Date().getFullYear()}, ArConnect
      </CopyrightSection>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding: 4rem 10vw 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Social = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})`
  position: relative;
  width: 2.45rem;
  height: 2.45rem;
  background-color: rgba(${props => props.theme.secondaryText}, .15);
  border-radius: 100%;
  cursor: pointer;
  transition: all .23s ease-in-out;

  &:hover {
    opacity: .8;
  }

  svg {
    position: absolute;
    font-size: 1rem;
    color: rgb(${props => props.theme.secondaryText});
    width: 1em;
    height: 1em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.5rem;
  padding-top: .6rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;

  img {
    height: 2.4rem;
    width: 2.4rem;
    user-select: none;
  }
`;

const LogoText = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  color: rgb(${props => props.theme.accent});
  line-height: 1.1em;
  margin: 0;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 1.05rem;
    font-weight: 550;
    color: rgba(${props => props.theme.secondaryText}, .8);
    cursor: pointer;
    text-decoration: none;
    transition: all .23s ease-in-out;

    &:hover {
      opacity: .75;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  line-height: 1.1em;
`;

const CopyrightSection = styled.div`
  border-top: 1px solid rgba(${props => props.theme.secondaryText}, .1);
  padding: 2rem 0;
  font-size: .97rem;
  font-weight: 500;
  color: rgba(${props => props.theme.secondaryText}, .4);
`;
