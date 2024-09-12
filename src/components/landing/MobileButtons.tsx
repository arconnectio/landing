import styled from "styled-components";
import Image from "next/image";

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
      <ButtonImage
        src="/logos/app-store.svg"
        height={50}
        width={150}
        alt="App store badge"
        draggable={false}
      />
      <ButtonImage
        src="/logos/google-playstore.png"
        height={50}
        width={168}
        alt="App store badge"
        draggable={false}
      />
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

const ButtonImage = styled(Image)`
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
