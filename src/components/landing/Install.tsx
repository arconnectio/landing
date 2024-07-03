import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ReactGA from "react-ga4";
import Spacer from "../Spacer";
import Image from "next/image";

const chromeLink =
  "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap";
const firefoxLink = "https://addons.mozilla.org/en-US/firefox/addon/arconnect/";

export default function Install({ title = true }) {
  return (
    <Wrapper>
      {title && (
        <>
          <SectionTitle>
            Install now
            <span>Available for major browsers</span>
          </SectionTitle>
          <Spacer y={3.4} />
        </>
      )}
      <Browsers>
        <BrowserElement
          onClick={() =>
            ReactGA.gtag("event", "download_link_click", {
              browser_name: "chrome"
            })
          }
        >
          <BrowserLogo href={chromeLink}>
            <Image
              src="/browsers/chrome.png"
              width={512}
              height={512}
              alt="Chrome browser logo for the ArConnect extension Chrome download link"
              draggable={false}
            />
          </BrowserLogo>
          <BrowserName href={chromeLink}>Chrome</BrowserName>
        </BrowserElement>
        {/* <BrowserElement
          onClick={() =>
            ReactGA.gtag("event", "download_link_click", {
              browser_name: "firefox"
            })
          }
        >
          <BrowserLogo href={firefoxLink}>
            <Image
              src="/browsers/firefox.png"
              width={512}
              height={512}
              alt="Firefox browser logo for the ArConnect extension Firefox download link"
              draggable={false}
            />
          </BrowserLogo>
          <BrowserName href={firefoxLink}>Firefox</BrowserName>
        </BrowserElement> */}
        <BrowserElement
          onClick={() =>
            ReactGA.gtag("event", "download_link_click", {
              browser_name: "edge"
            })
          }
        >
          <BrowserLogo href={chromeLink}>
            <Image
              src="/browsers/edge.png"
              width={512}
              height={512}
              alt="Edge browser logo for the ArConnect extension Edge download link"
              draggable={false}
            />
          </BrowserLogo>
          <BrowserName href={chromeLink}>Edge</BrowserName>
        </BrowserElement>
        <BrowserElement
          onClick={() =>
            ReactGA.gtag("event", "download_link_click", {
              browser_name: "brave"
            })
          }
        >
          <BrowserLogo href={chromeLink}>
            <Image
              src="/browsers/brave.png"
              width={512}
              height={512}
              alt="Brave browser logo for the ArConnect extension Brave download link"
              draggable={false}
            />
          </BrowserLogo>
          <BrowserName href={chromeLink}>Brave</BrowserName>
        </BrowserElement>
      </Browsers>
      {title && <Spacer y={4} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 10vw;
`;

const Browsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
    justify-content: unset;
    align-items: unset;
  }
`;

const BrowserElement = styled.div`
  display: grid;
  gap: 1.25rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(0.96);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const BrowserLogo = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})`
  cursor: pointer;
  text-decoration: none;

  img {
    display: block;
    width: 6rem;
    height: 6rem;
    user-select: none;
    margin: 0 auto;
  }
`;

const BrowserName = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferer"
})`
  display: block;
  width: 70%;
  text-align: center;
  background-color: #fff;
  font-size: 0.95rem;
  color: rgb(${(props) => props.theme.secondaryText});
  font-weight: 650;
  padding: 0.375rem 0.6rem;
  line-height: 1.1em;
  border-radius: 1rem;
  cursor: pointer;
  margin: 0 auto;
  text-decoration: none;
`;
