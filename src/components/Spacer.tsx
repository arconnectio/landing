import styled from "styled-components";

const Spacer = styled.span<{ x?: number; y?: number }>`
  display: block;
  height: ${({ y }) => (y ? `${y}rem` : "0")};
  width: ${({ x }) => (x ? `${x}rem` : "0")};

  @media screen and (max-width: 720px) {
    height: ${({ y }) => (y ? `${y / 2}rem` : "0")};
    width: ${({ x }) => (x ? `${x / 2}rem` : "0")};
  }
`;

export default Spacer;
