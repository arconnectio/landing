import styled from "styled-components";
import Spacer from "../Spacer";
import Image from "next/image";
import MobileButtons from "./MobileButtons";

export default function Mobile() {
  return (
    <Wrapper>
      <LeftColumn>
        <MobileTag>
          ArConnect mobile <span>now available!</span>
        </MobileTag>
        <Spacer y={1.563} />
        <Title>
          Manage your <span>$AR</span> and <span>$AO</span> assets anywhere
        </Title>
        <Spacer y={2.5} />
        <MobileButtons style={{ paddingTop: 16 }} hideOnMobile />
      </LeftColumn>
      <RightColumn>
        <ArConnectMobileImage
          src="/images/arconnect-mobile.png"
          height={450}
          width={468}
          alt="Arconnect Mobile"
          draggable={false}
        />
        <MobileButtons style={{ paddingTop: 16 }} showOnlyOnMobile />
      </RightColumn>

      <Gradient />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 7rem 10vw 7rem;
  background: linear-gradient(
    270deg,
    #fdfcff 0%,
    #fcfbff 14.44%,
    #f8f6ff 43.31%,
    #f6f4ff 72.18%,
    #f8f6ff 96.25%
  );

  @media screen and (max-width: 720px) {
    justify-content: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  height: 100%;
`;

const RightColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MobileTag = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px 18px;
  border-radius: 50px;
  border: 1.5px solid #5836fb;
  width: max-content;

  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 150%;

  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }

  span {
    color: #684cf1;
    font-weight: 700;
  }
`;

const Title = styled.h1`
  color: #262626;
  font-size: 3.375rem;
  font-weight: 700;
  line-height: 125%;
  padding: 0;
  margin: 0;

  span {
    color: #8e7bea;
  }

  @media screen and (max-width: 720px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const Gradient = styled.div`
  height: 164px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background: linear-gradient(180deg, rgba(234, 230, 253, 0) 0%, #f0f0ff 100%);
  mix-blend-mode: plus-darker;
`;

const ArConnectMobileImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 6vw;

  @media screen and (max-width: 720px) {
    position: initial;
    height: 300px;
    width: 300px;
  }
`;
