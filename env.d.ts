import "styled-components";

/// <reference types="vite/client" />

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    background: string;
    primaryText: string;
    secondaryText: string;
    secondaryTextv2: string;
  }
}

declare global {
  interface Window {
    twq: (...args: unknown[]) => void;
  }
}
