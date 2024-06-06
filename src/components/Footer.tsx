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
            <LogoText>ArConnect</LogoText>
          </LogoWrapper>
          <Socials>
            <Social href="/twitter">
              <TwitterIcon />
            </Social>
            <Social href="/discord">
              <DiscordIcon />
            </Social>
            <Social href="/github">
              <GithubIcon />
            </Social>
          </Socials>
        </LeftSection>
        <Links>
          <LinkColumn>
            <ColumnTitle>About</ColumnTitle>
            <Link href="/apps">Apps</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/branding">Branding</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/audit.pdf">Security Audit - July 2023</Link>
            <Link href="/audit-2024.pdf">Security Audit - May 2024</Link>
          </LinkColumn>
          <LinkColumn>
            <ColumnTitle>Help</ColumnTitle>
            <a href="/support" target="_blank" rel="noopener noreferrer">
              Chat
            </a>
            <Link href="/help">Help Center</Link>
            <Link href="/recover">Recovery</Link>
          </LinkColumn>
          <LinkColumn>
            <ColumnTitle>Developers</ColumnTitle>
            <Link
              href="https://docs.arweavekit.com/wallets/wallet-kit"
              target="_blank"
              rel="noopener noreferer"
            >
              Kit
            </Link>
            <a
              href="https://docs.arconnect.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a
              href="https://github.com/arconnectio/arconnect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codebase
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

  @media screen and (max-width: 720px) {
    padding: 2rem 7vw 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: unset;
    padding-bottom: 2rem;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 720px) {
    gap: 1.5rem;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 720px) {
    gap: 1.25rem;
  }
`;

const Social = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})`
  position: relative;
  width: 2.45rem;
  height: 2.45rem;
  background-color: rgba(${(props) => props.theme.secondaryText}, 0.15);
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 720px) {
    width: 2.1rem;
    height: 2.1rem;
  }

  svg {
    position: absolute;
    font-size: 1rem;
    color: rgb(${(props) => props.theme.secondaryText});
    width: 1em;
    height: 1em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 720px) {
      font-size: 0.8rem;
    }
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.5rem;
  padding-top: 0.6rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  img {
    height: 2.4rem;
    width: 2.4rem;
    user-select: none;

    @media screen and (max-width: 720px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const LogoText = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  color: rgb(${(props) => props.theme.accent});
  line-height: 1.1em;
  margin: 0;

  @media screen and (max-width: 720px) {
    font-size: 2.1rem;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 1.05rem;
    font-weight: 550;
    color: rgba(${(props) => props.theme.secondaryText}, 0.8);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.23s ease-in-out;

    &:hover {
      opacity: 0.75;
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
  border-top: 1px solid rgba(${(props) => props.theme.secondaryText}, 0.1);
  padding: 2rem 0;
  font-size: 0.97rem;
  font-weight: 500;
  color: rgba(${(props) => props.theme.secondaryText}, 0.4);
`;
