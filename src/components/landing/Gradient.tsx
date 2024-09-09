import styled from "styled-components";

export const Gradient = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background: linear-gradient(180deg, rgba(234, 230, 253, 0) 0%, #f0f0ff 100%);
  mix-blend-mode: plus-darker;
`;
