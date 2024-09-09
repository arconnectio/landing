import styled from "styled-components";
import Image from "next/image";
import Button from "../Button";

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
      <Button
        padding="0"
        as={ButtonImage}
        src="/logos/app-store.svg"
        height={50}
        width={150}
        alt="App store badge"
        draggable={false}
      />
      <Button
        padding="0"
        as={ButtonImage}
        src="/logos/google-playstore.png"
        height={36}
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
    @media screen and (max-width: 720px) {
      display: none;
    }
  `}

  ${(props) =>
    props.showOnlyOnMobile &&
    `
    @media screen and (max-width: 720px) {
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
  z-index: 9999;
`;
