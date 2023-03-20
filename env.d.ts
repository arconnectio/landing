import "styled-components";

/// <reference types="vite/client" />

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    background: string;
    primaryText: string;
    secondaryText: string;
  }
}