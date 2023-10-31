import { ArrowUpRightIcon } from "@iconicicons/react";
import styled from "styled-components";
import { ReactNode } from "react";

const NavigationIcon: React.FC<Props> = ({ alt = false, icon, ...rest }) => {
  return (
    <NavigationWrapper alt={alt} {...rest}>
      <WhiteCircle>
        {icon || <ArrowUpRightIcon />}
      </WhiteCircle>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div<{ alt: boolean }>`
  display: flex;
  justify-content: flex-end;

  flex-direction: ${(props) => (props.alt ? "column" : "row")};
`;

const WhiteCircle = styled.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;

  background-color: white;
  border-radius: 50%;
  padding: 14px;
`;

export default NavigationIcon;

interface Props {
  alt?: boolean;
  icon?: ReactNode;
}
