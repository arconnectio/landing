import styled from "styled-components";
import { useMemo } from "react";

const BlogTitle: React.FC<Props> = ({ title, limit }) => {
  const parts = useMemo(() => {
    const MAX_LINE_LENGTH = limit || 24;
    const words = title.split(" ");
    const finalParts: string[] = [];
    let line = 0;

    for (let i = 0; i < words.length; i++) {
      let lineLenght = ((finalParts[line] || "") + " " + words[i]).length;

      if (!finalParts[line]) {
        finalParts.push(words[i]);

        if (words[i].length > MAX_LINE_LENGTH) line++;
      } else if (lineLenght <= MAX_LINE_LENGTH && (line === 0 || lineLenght < finalParts[line - 1].length)) {
        finalParts[line] += " " + words[i];
      } else {
        line++;
        finalParts.push(words[i]);
      }
    }

    return finalParts;
  }, [title, limit]);

  return (
    <TitleContainer>
      <Title>
        {parts.map((line, i) => {
          let type: "first" | "last" | "single" | undefined;

          if (i === parts.length - 1) type = "last";
          else if (i === 0) type = "first";
          
          if (parts.length === 1) type = "single";

          return (
            <TitleLine key={i} type={type}>
              <span>{line}</span>
              <TitleLineBackground />
            </TitleLine>
          );
        })}
      </Title>
    </TitleContainer>
  );
};

const Title = styled.h2`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  padding: 8px 0;
  width: max-content;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleLineBackground = styled.span`
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
`;

const TitleLine = styled.div<{ type?: "first" | "last" | "single" }>`
  position: relative;
  width: max-content;
  padding: ${props => (props.type === "first" || props.type === "single") ? ".3rem" : ".15rem"} .7rem .3rem;
  z-index: 4;

  &::after {
    position: absolute;
    content: "";
    display: ${props => props.type !== "first" && props.type !== "single" ? "block" : "none"};
    top: -1px;
    left: calc(100% - 1px);
    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M199.5 12.8515C96.5183 13.1207 13.1033 96.5393 12.834 199.5H0.5V0.5H199.5V12.8515Z' fill='white' stroke='white'/%3E%3C/svg%3E%0A");
    background-size: contain;
    width: 15px;
    height: 15px;
  }

  ${TitleLineBackground} {
    border-radius: ${props => {
      switch(props.type) {
        case "first":
          return "14px 14px 14px 0";

        case "last":
          return "0 0 14px 14px";

        case "single":
          return "14px";
  
        default:
          return "0 0 14px 0";
      }
    }};
  }
`;

const TitleContainer = styled.div`
  z-index: 4;
  width: max-content;
`;

export default BlogTitle;

interface Props {
  title: string;
  limit?: number;
}
