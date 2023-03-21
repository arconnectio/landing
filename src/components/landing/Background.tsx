import styled from "styled-components";

export default function Background() {
  return (
    <Wrapper>
      <Gradient1 />
      <Gradient2 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: -8rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
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

const Gradient2 = styled(Gradient1)`
  top: 83vh;
  right: -12vw;
  left: unset;
  background: rgba(${(props) => props.theme.accent}, 0.06);
`;