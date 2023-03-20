import { ArrowUpRightIcon } from "@iconicicons/react";
import styled from "styled-components";
import Button from "./Button";
import Spacer from "./Spacer";
import Link from "next/link";

export default function Nav() {
  return (
    <Wrapper>
      <LogoSection>
        <Link href="/">
          <Logo />
        </Link>
        <Spacer x={3} />
        <Separator />
        <Spacer x={3} />
      </LogoSection>
      <NavElement>
        <NavPageLinks>
          <NavLink href="/">
            Home
          </NavLink>
          <NavLink href="/">
            Support
          </NavLink>
          <NavLink href="/">
            Kit
          </NavLink>
        </NavPageLinks>
        <Link href="/download" passHref legacyBehavior>
          <Button>
            Download
            <ArrowUpRightIcon />
          </Button>
        </Link>
      </NavElement>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: calc(2.5rem + 3rem + 3rem + .1rem) auto;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(${props => props.theme.background}, .4);
  backdrop-filter: blur(20px);
  padding: 1.2rem 5.25rem;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img.attrs({
  draggable: false,
  alt: "ArConnect hedgehog logo",
  src: "/logo.png"
})`
  height: 2.5rem;
  user-select: none;
  transition: all .23s ease-in-out;

  &:hover {
    opacity: .85;
  }
`;

const Separator = styled.span`
  height: 1.57rem;
  width: .1rem;
  background-color: rgba(81, 76, 109, .15);
`;

const NavElement = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavPageLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  color: rgb(${props => props.theme.secondaryText});
  transition: all .23s ease-in-out;

  &:hover {
    opacity: .8;
  }
`;
