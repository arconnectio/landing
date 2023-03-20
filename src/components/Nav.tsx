import styled from "styled-components";

export default function Nav() {
  return (
    <Wrapper>
      test
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: rgba(${props => props.theme.background}, .4);
  backdrop-filter: blur(20px);
`;
