import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon } from "@iconicicons/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import Spacer from "./Spacer";
import Link from "next/link";

export default function Nav() {
  // scroll effect
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const listener = () => setScroll(window.scrollY > 40);

    window.addEventListener("scroll", listener);
    listener();

    return () => window.removeEventListener("scroll", listener);
  }, []);

  // mobile nav open
  const [mobileOpen, setMobileOpen] = useState(true);

  // is the display a mobile display
  const isMobile = useMediaQuery({
    query: "(max-width: 720px)"
  });

  useEffect(() => {
    if (isMobile) {
      return setMobileOpen(false);
    }

    return setMobileOpen(true);
  }, [isMobile]);

  return (
    <>
      <Announcement href="/audit.pdf" target="_blank" rel="noopener noreferer" aria-label="Security Audit" title="Security Audit" passHref>
        Our security audit is ready 🎉
        <ArrowRightIcon />
      </Announcement>
      <Wrapper scroll={scroll ? 1 : 0}>
        <LogoSection>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="ArConnect hedgehog logo"
              draggable={false}
              width={512}
              height={512}
            />
          </Link>
          <Spacer x={3} />
          <Separator />
          <Spacer x={3} />
          <Hamburger onClick={() => setMobileOpen((val) => !val)}>
            <HamburgerIcon />
          </Hamburger>
        </LogoSection>
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <NavElement
              variants={mobileNavAnimation}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <NavPageLinks>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/support">Support</NavLink>
                <NavLink
                  href="https://docs.arconnect.io"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Docs
                </NavLink>
              </NavPageLinks>
              <Link href="/download" passHref legacyBehavior>
                <Button>
                  Download
                  <ArrowUpRightIcon />
                </Button>
              </Link>
            </NavElement>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header<{ scroll: 1 | 0 }>`
  display: grid;
  align-items: center;
  grid-template-columns: calc(2.5rem + 3rem + 3rem + 0.1rem) auto;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(
    ${(props) => props.theme.background},
    ${(props) => (props.scroll === 1 ? ".55" : "0")}
  );
  backdrop-filter: blur(${(props) => (props.scroll === 1 ? "20px" : "0px")});
  padding: 1.2rem 5.25rem;
  z-index: 100;
  transition: all 0.23s ease-in-out;

  @media screen and (max-width: 720px) {
    display: block;
    padding: 1rem 2rem;
    background-color: rgb(${(props) => props.theme.background}, 0.55);
    backdrop-filter: blur(20px);
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 2.5rem;
    width: 2.5rem;
    user-select: none;
    transition: all 0.23s ease-in-out;

    &:hover {
      opacity: 0.85;
    }

    @media screen and (max-width: 720px) {
      height: 2.35rem;
      width: 2.35rem;
    }
  }

  @media screen and (max-width: 720px) {
    justify-content: space-between;
  }
`;

const Separator = styled.span`
  height: 1.57rem;
  width: 0.1rem;
  background-color: rgba(81, 76, 109, 0.15);

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const NavElement = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    overflow: hidden;
  }
`;

const NavPageLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    padding-top: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  color: rgb(${(props) => props.theme.secondaryText});
  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const Hamburger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: rgba(${(props) => props.theme.secondaryText}, 0.675);
  transition: all 0.23s ease-in-out;

  svg {
    height: 2.3rem;
    width: 2.3rem;
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const HamburgerIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="13" width="24" height="2" fill="currentColor" />
    <rect x="6" y="21" width="24" height="2" fill="currentColor" />
  </svg>
);

const mobileNavAnimation: Variants = {
  open: {
    height: "auto",
    transition: { duration: 0.21 }
  },
  closed: {
    height: 0,
    transition: { duration: 0.21 }
  }
};

const Announcement = styled(Link)`
  font-size: .94rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .38rem;
  color: #fff;
  text-decoration: none;
  padding: .6rem;
  text-align: center;
  cursor: pointer;
  background-color: rgb(${props => props.theme.accent});

  svg {
    font-size: 1.2em;
    width: 1em;
    height: 1em;
  }
`;
