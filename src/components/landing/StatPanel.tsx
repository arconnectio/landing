import { formatStateVal } from "~/utils/format";
import styled from "styled-components";
import { ReactNode } from "react";

export default function StatPanel({
  icon,
  name,
  value,
  greater = false,
  plus = false
}: Props) {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <MetricName>{name}</MetricName>
        <MetricValue>
          {greater && ">"}
          {formatStateVal(value)}
          {plus && "+"}
        </MetricValue>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 150px;
  background-color: rgb(${(props) => props.theme.background});
  padding: 30px 26px;
  border-radius: 25px;

  @media screen and (max-width: 720px) {
    width: auto;
    padding: 30px 20px;
  }

  @media screen and (max-width: 320px) {
    justify-content: space-between;
    width: calc(100vw - 28vw);
  }

  h3,
  p {
    line-height: 1.1em;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid rgba(${(props) => props.theme.accent}, 0.2);

  svg {
    font-size: 1.6rem;
    color: rgb(${(props) => props.theme.accent});
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 320px) {
    width: 48px;
    height: 48px;
  }
`;

const MetricName = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(${(props) => props.theme.secondaryText});

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const MetricValue = styled.p`
  font-size: 1.9rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.accent});

  @media screen and (max-width: 320px) {
    font-size: 2.28rem;
  }
`;

interface Props {
  icon: ReactNode;
  name: string;
  value: number;
  greater?: boolean;
  plus?: boolean;
}
