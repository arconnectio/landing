import styled from "styled-components";
import Image from "next/image";
import ReactGA from "react-ga4";

interface MobileButtonsProps {
  style?: React.CSSProperties;
  hideOnMobile?: boolean;
  showOnlyOnMobile?: boolean;
}

export default function MobileButtons({
  style,
  hideOnMobile,
  showOnlyOnMobile
}: MobileButtonsProps) {
  return (
    <Buttons
      style={style}
      hideOnMobile={hideOnMobile}
      showOnlyOnMobile={showOnlyOnMobile}
    >
      <ButtonLink>
        <StyledImage
          src="/logos/app-store.svg"
          height={50}
          width={150}
          alt="App store button"
          draggable={false}
        />
      </ButtonLink>
      <ButtonLink
        onClick={() =>
          ReactGA.gtag("event", "download_link_click", {
            device_name: "android"
          })
        }
        href="https://play.google.com/store/apps/details?id=io.arconnect.app"
      >
        <StyledImage
          src="/logos/google-playstore.png"
          height={50}
          width={168}
          alt="Play store button"
          draggable={false}
        />
      </ButtonLink>
    </Buttons>
  );
}

interface ButtonsProps {
  hideOnMobile?: boolean;
  showOnlyOnMobile?: boolean;
}

const Buttons = styled.div<ButtonsProps>`
  display: ${(props) =>
    props.hideOnMobile ? "flex" : props.showOnlyOnMobile ? "none" : "flex"};
  gap: 16px;
  align-items: center;

  ${(props) =>
    props.hideOnMobile &&
    `
    @media screen and (max-width: 950px) {
      display: none;
    }
  `}

  ${(props) =>
    props.showOnlyOnMobile &&
    `
    @media screen and (max-width: 950px) {
      display: flex;
    }
  `}

  @media screen and (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledImage = styled(Image)`
  height: 50px;
  width: max-content;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.18s ease-in-out;

  &:hover:not(:active):not(:disabled) {
    transform: translate3d(0px, -1.4px, 0px);
    box-shadow: 0px 0px 2px
        rgba(${(props) => props.color || props.theme.accent}, 0.15),
      0px 4px 7px rgba(${(props) => props.color || props.theme.accent}, 0.05),
      0px 12px 40px rgba(${(props) => props.color || props.theme.accent}, 0.1);
  }
`;

const ButtonLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})`
  cursor: pointer;
  text-decoration: none;
`;
