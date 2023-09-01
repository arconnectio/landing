import styled from "styled-components";
import { ArrowUpRightIcon } from "@iconicicons/react";

const NavigationIcon: React.FC<{ flexDir?: string }> = ({ flexDir }) => {
  return (
    <NavigationWrapper>
      <WhiteCircle>
        <ArrowUpRightIcon />
      </WhiteCircle>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div<{ flexDirection?: string }>`
  display: flex;
  justify-content: flex-end;

  flex-direction: ${(props) => props.flexDirection || "row"};
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
