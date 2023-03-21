import { formatStateVal } from "~/utils/format";
import styled from "styled-components";
import { ReactNode } from "react";

export default function StatPanel({ icon, name, value }: Props) {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <MetricName>{name}</MetricName>
        <MetricValue>{formatStateVal(value)}</MetricValue>
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
`;

const MetricName = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(${(props) => props.theme.secondaryText});
  line-height: 1.1em;
  margin: 0;
`;

const MetricValue = styled.p`
  font-size: 1.9rem;
  font-weight: 700;
  color: rgb(${(props) => props.theme.accent});
  line-height: 1.1em;
  margin: 0;
`;

interface Props {
  icon: ReactNode;
  name: string;
  value: number;
}
