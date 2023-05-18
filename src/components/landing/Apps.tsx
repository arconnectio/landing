import { Application as ApplicationInterface } from "../../utils/apps";
import { ArrowUpRightIcon } from "@iconicicons/react";
import { Space_Grotesk } from "next/font/google";
import SectionTitle from "./SectionTitle";
import Application from "./Application";
import styled from "styled-components";
import Spacer from "../Spacer";
import Link from "next/link";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500"
});

export default function Apps({ apps }: Props) {
  return (
    <Wrapper id="apps">
      <SectionTitle>
        Get started on the permaweb
        <span>with ArConnect</span>
      </SectionTitle>
      <Spacer y={3.4} />
      <AppsGrid>
        {apps.slice(0, 3).map((app, i) => <Application {...app} key={i} />)}
      </AppsGrid>
      <Spacer y={1.85} />
      <Footer>
        <ViewAllLink href="/apps">
          View all
          <ArrowUpRightIcon />
        </ViewAllLink>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 10vw;
`;

const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 1.9rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ViewAllLink = styled(Link)`
  ${spacegrotesk.style}
  display: flex;
  font-size: 1.1rem;
  align-items: center;
  color: rgb(${props => props.theme.accent});
  text-decoration: none;
  gap: .35rem;
  transition: all .23s ease-in-out;

  svg {
    font-size: 1.185em;
    width: 1em;
    height: 1em;
  }

  &:hover {
    opacity: .8;
  }
`;

interface Props {
  apps: ApplicationInterface[];
}
