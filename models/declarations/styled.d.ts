import "styled-components";
import { FlattenSimpleInterpolation } from "styled-components";

type layerType = {
  primary: string;
  secondary: string;
  gray: string;
  grayDark: string;
  grayLight: string;
  white: string;
  hover: string;
};

type fontsType = {
  fontFamilySansSerif: "Avenir";
  fontFamilyModernSerif: "Chronicle Display";
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors?: layerType;
    convert?: any;
    grid?: (min: number, gap: number) => string;

    fonts?: {
      fontFamilySansSerif: string;
      fontFamilyModernSerif: string;
    };

    fontSize?: {
      fontSize12px: string;
      fontSize14px: string;
      fontSize16px: string;
      fontSize18px: string;
      fontSize24px: string;
      fontSize28px: string;
      fontSize46px: string;
    };

    spaces?: {
      none: string;
      xxxs: string;
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
