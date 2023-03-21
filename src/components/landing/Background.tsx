import styled from "styled-components";

export default function Background() {
  return (
    <Wrapper>
      <Gradient1 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Gradient1 = styled.div`
  position: absolute;
  width: 78vw;
  height: 78vw;
  top: -14vw;
  left: -10vw;

  background: rgba(${(props) => props.theme.accent}, 0.1);
  filter: blur(100px);
`;
