import styled from "styled-components";
import Image from "next/image";

const Application = ({ name, description, logo, href }: Props) => (
  <AppWrapper href={href}>
    <Image src={logo} alt={`${name} logo`} width={512} height={422} />
    <AppData>
      <AppName>
        {name}
      </AppName>
      <AppDescription>
        {description}
      </AppDescription>
    </AppData>
  </AppWrapper>
);

const AppWrapper = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})`
  display: flex;
  align-items: center;
  gap: 22px;
  background-color: rgb(${(props) => props.theme.background});
  padding: 15px 26px;
  border-radius: 25px;
  text-decoration: none;
  transition: all .23s ease-in-out;

  &:hover {
    transform: translate3d(0px, -1.4px, 0px);
  }

  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
`;

const AppData = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

const AppName = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  line-height: 1.1em;
  color: rgb(${props => props.theme.accent});
  font-weight: 650;
  margin: 0;
`;

const AppDescription = styled.p`
  font-size: .9rem;
  color: rgb(${props => props.theme.secondaryText});
  font-weight: 500;
  margin: 0;
  text-align: justify;
`;

interface Props {
  name: string;
  description: string;
  logo: string;
  href: string;
}

export default Application;
