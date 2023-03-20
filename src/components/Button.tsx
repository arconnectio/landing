import { Space_Grotesk } from "next/font/google";
import styled from "styled-components";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400"
});

const Button = styled.a<{
  secondary?: boolean;
  reverse?: boolean;
  small?: boolean;
}>`
  ${spacegrotesk.style}
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(${props => props.theme.accent});
  color: #fff;
  font-size: .9rem;
  padding: .9rem 1.2rem;
  gap: .5rem;
  border-radius: ${props => props.small ? "25px" : "30px"};
  cursor: pointer;
  outline: none;
  border: none;
  text-decoration: none;
  width: max-content;
  transition: all .18s ease-in-out;

  &:hover:not(:active):not(:disabled) {
    transform: translate3d(0px, -1.4px, 0px);
    box-shadow: 0px 0px 2px rgba(${props => props.theme.accent}, 0.15), 0px 4px 7px rgba(${props => props.theme.accent}, 0.05), 0px 12px 40px rgba(${props => props.theme.accent}, 0.1);
  }

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.385em;
    width: 1em;
    height: 1em;
  }
`;

export default Button;