import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    translateY: 15,
    transition: {
      duration: 0.43,
      ease: "easeInOut"
    }
  },
  shown: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.43,
      ease: "easeInOut"
    }
  }
};
