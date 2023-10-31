import { Subtitle } from "../content/Text";
import styled from "styled-components";

export const SectionTitle = styled(Subtitle)`
  display: flex;
  align-items: center;
  gap: 1.15rem;
  font-size: 1.85rem;
  font-weight: 600;
  color: rgb(${(props) => props.theme.primaryText});

  svg {
    width: 2.63rem;
    height: 2.63rem;
  }
`;

export const Articles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4.5rem 3.5rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;
