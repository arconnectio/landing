import styled from "styled-components";

const theme = "171, 154, 255";

export const Button = styled.button<ButtonProps>`
  display: flex;
  color: rgb(${props => props.secondary ? theme : props.reversed ? theme : "255, 255, 255"});
  background-color: rgba(${props => props.secondary ? theme + ", .2" : (props.reversed ? "#fff" : theme)  + ", 1"});
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${props => props.small ? ".83rem" : "1.05rem"};
  font-weight: 600;
  padding: ${props => props.small ? ".9rem" : "1.2rem"} ${props => props.fullWidth ? "0" : (props.small ? "2rem" : "3.35rem")};
  width: ${props => props.fullWidth ? "100%" : "auto"};
  border-radius: ${props => props.small ? "19px" : "25px"};
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: .3rem;
  transition: all .23s ease-in-out;
  box-shadow: 0 0 0 0 rgba(${props => props.reversed ? "#fff" : theme}, ${props => props.secondary ? ".2" : 1});

  &:hover:not(:active):not(:disabled) {
    box-shadow: 0 0 0 ${props => props.small ? ".19rem" : ".25rem"} rgba(${props => props.reversed ? "#fff" : theme}, ${props => props.secondary ? ".2" : 1});
  }

  &:disabled {
    opacity: .87;
    cursor: not-allowed;
  }
`;

export interface ButtonProps {
  secondary?: boolean;
  reversed?: boolean;
  small?: boolean;
  fullWidth?: boolean;
}
