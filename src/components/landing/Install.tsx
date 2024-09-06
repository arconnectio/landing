import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Spacer from "../Spacer";
import MobileButtons from "./MobileButtons";
import Browsers from "./Browsers";

export default function Install({ title = true }) {
  return (
    <Wrapper>
      {title && (
        <>
          <SectionTitle>Install now</SectionTitle>
          <Spacer y={3.5} />
        </>
      )}
      <DeviceText>For browser</DeviceText>
      <Spacer y={2} />
      <Browsers />
      <Apps>
        <DeviceText>For mobile</DeviceText>
        <MobileButtons />
      </Apps>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 7rem 10vw;
  display: flex;
  flex-direction: column;
`;

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  gap: 2rem;
`;

const DeviceText = styled.span`
  color: #494464;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
