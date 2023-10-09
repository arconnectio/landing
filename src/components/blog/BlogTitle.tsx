import styled from "styled-components";
import { ReactNode } from "react";

const TitleChange: React.FC<{
  title: ReactNode;
  background?: string;
  alternative?: boolean;
  width?: string;
  icon?: ReactNode;
}> = ({ title, alternative = false, icon, width, background }) => {
  const defaultSVG = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="387" height="142" viewBox="0 0 387 142" fill="none"><path d="M251.207 141H19C9.05887 141 1 132.941 1 123V19C1 9.05888 9.05887 1 19 1H368C377.941 1 386 9.05887 386 19V41.3014C386 51.2425 377.941 59.3014 368 59.3014H347.696C337.755 59.3014 329.696 67.3603 329.696 77.3014V81.1918C329.696 91.1329 321.637 99.1918 311.696 99.1918H287.207C277.265 99.1918 269.207 107.251 269.207 117.192V123C269.207 132.941 261.148 141 251.207 141Z" fill="white" stroke="white"/></svg>'
  )}`;
  const secondarySVG = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="255" height="100" viewBox="0 0 255 100" fill="none"><path d="M229 71.6875V81C229 90.9411 220.941 99 211 99H19C9.05887 99 1 90.9472 1 81.0061V18.9964C1 9.05532 9.05888 1 19 1H236C245.941 1 254 9.05887 254 19V46.6875C254 53.5911 248.404 59.1875 241.5 59.1875C234.596 59.1875 229 64.7839 229 71.6875Z" fill="white" stroke="white"/></svg>'
  )}`;

  return (
    <>
      <TitleContainer
        background={
          background ? background : !alternative ? defaultSVG : secondarySVG
        }
      >
        <BlogTitle alternative={alternative} width={width}>
          <span>
            {title}
            {icon && <span>{icon}</span>}
          </span>
        </BlogTitle>
      </TitleContainer>
    </>
  );
};

const BlogTitle = styled.h2<{
  alternative: boolean;
  width?: string;
}>`
  margin: 0;
  font-size: 1.875rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  padding: 8px 0;
  width: ${(props) => (props.width ? props.width : "357px")};

  & span {
    & span {
      margin-left: ${(props) => (props.alternative ? "10px" : "0px")};
    }
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.alternative ? "150px" : "250px")};
    font-size: 1.25rem;
  }
`;

const TitleContainer = styled.div<{
  background: string;
  alternative?: boolean;
}>`
  font-size: 1.875rem;
  border-radius: 20px 20px 20px 0;
  padding: 7px 10px 7px 30px;
  max-width: max-content;
  z-index: 4;

  background: url(${(props) => props.background});

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TitleChange;
