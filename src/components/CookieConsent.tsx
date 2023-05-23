import { ANALYTICS_MEASUREMENT_ID, consentGA, useAnalytics, useCookies } from "~/utils/cookies";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Manrope } from "next/font/google";
import styled from "styled-components";
import ReactGA from "react-ga4";

const manrope = Manrope({ subsets: ["latin"], weight: "variable" });

export default function CookieConsent() {
  // init analytics
  const [optedInGA] = useAnalytics();
  const [initializedGA, setInitializedGA] = useState(false);

  useEffect(() => {
    // initially "optedInGA" is false, so if the user
    // opted out from analytics, it will never get
    // initialized
    if (!optedInGA || initializedGA) return;

    // setup consent (no consent to cookies)
    consentGA("default", false);
    ReactGA.initialize(ANALYTICS_MEASUREMENT_ID);
    setInitializedGA(true);
  }, [optedInGA]);

  // init cookie tracking for analytics
  const [consentCookies, toggle] = useCookies();

  useEffect(() => {
    // only continue if the user has
    // is opted into Google Analytics
    if (!initializedGA) return;

    consentGA("update", !!consentCookies);
  }, [initializedGA, consentCookies]);

  // show cookie consent
  const showConsent = useMemo(() => typeof consentCookies !== "boolean", [consentCookies]);

  return (
    <AnimatePresence>
      {showConsent && <ConsentDialog>
        <ConsentText>
          We use cookies to better understand customer needs
        </ConsentText>
        <Buttons>
          <Button onClick={() => toggle(true)}>
            Accept
          </Button>
          <Button secondary onClick={() => toggle(false)}>
            Decline
          </Button>
        </Buttons>
      </ConsentDialog>}
      {showConsent && <BackgroundLayer key="bg" />}
    </AnimatePresence>
  );
}

const backgroundAnimation: Variants = {
  hidden: { opacity: 0 },
  shown: { opacity: 1 }
};

const BackgroundLayer = styled(motion.div).attrs({
  variants: backgroundAnimation,
  initial: "hidden",
  animate: "shown",
  exit: "hidden",
  transition: { duration: .18 }
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  z-index: 200;
`;

const dialogAnimation: Variants = {
  hidden: { opacity: 0, translateY: 10 },
  shown: { opacity: 1, translateY: 0 }
};

const ConsentDialog = styled(motion.div).attrs({
  variants: dialogAnimation,
  initial: "hidden",
  animate: "shown",
  exit: "hidden",
  transition: { duration: .25 }
})`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 1.24rem;
  padding: .75rem 1rem;
  background-color: rgb(${props => props.theme.background});
  border-radius: 15px;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 201;

  @media screen and (max-width: 720px) {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    padding: .7rem .8rem;
  }
`;

const ConsentText = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  color: rgb(${props => props.theme.primaryText});
  margin: 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: .6rem;
  }
`;

const Button = styled.button<{ secondary?: boolean; }>`
  background-color: ${props => !props.secondary ? "#000" : "transparent"};
  color: ${props => !props.secondary ? "#fff" : "#000"};;
  font-size: .9rem;
  font-weight: 550;
  border-radius: 9px;
  padding: .5rem 1.2rem;
  cursor: pointer;
  outline: none;
  border: none;
  text-align: center;
  transition: all .23s ease-in-out;
  ${manrope.style}

  &:hover {
    background-color: rgba(0, 0, 0, ${props => !props.secondary ? ".8" : ".05"});
  }

  &:active {
    background-color: rgba(0, 0, 0, ${props => !props.secondary ? ".75" : ".032"});
  }
`;