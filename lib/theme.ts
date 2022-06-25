import { css } from "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {};

theme.colors = {
  primary: "#FFE600",
  secondary: "#EEEEEE",
  gray: "#666666",
  grayDark: "#333333",
  grayLight: "#999999",
  white: "#FFFFFF",
  hover: "#3483fa",
  hoverLight: "#e3ecfa",
};

theme.convert = {
  px: {
    em: (pxValue: any) => `${(pxValue / 16).toFixed(2)}em`,
    rem: (pxValue: any) => `${(pxValue / 16).toFixed(2)}rem`,
  },
};

theme.fontSize = {
  fontSize12px: theme.convert.px.rem(12),
  fontSize14px: theme.convert.px.rem(14),
  fontSize16px: theme.convert.px.rem(16),
  fontSize18px: theme.convert.px.rem(18),
  fontSize24px: theme.convert.px.rem(24),
  fontSize28px: theme.convert.px.rem(28),
  fontSize46px: theme.convert.px.rem(46),
};

// spacing -> margin - padding
theme.spaces = {
  xxxs: "4px",
  xxs: "8px",
  xs: "16px",
  s: "24px",
  m: "32px",
  l: "40px",
  xl: "48px",
  xxl: "56px",
  xxxl: "64px",
};

export const screenWidth: any = {
  mobile: "576px",
  tablet: "768px" /* sm */,
  laptop: "992px" /* md */,
  desktop: "1224px" /* lg */,
};

/* For mobile-first design */
export const breakpoint = Object.keys(screenWidth).reduce(
  (acc: any, key: any) => {
    acc[key] = (literals: TemplateStringsArray, ...args: any[]) => css`
      @media screen and (min-width: ${screenWidth[key]}) {
        ${css(literals, ...args)}
      }
    `;
    return acc;
  },
  {}
);

export const gridFunction = {
  breakpoints: {
    xl: 1224,
    lg: 1224,
    md: 992,
    sm: 768,
    xs: 576,
  },
};

export default theme;
