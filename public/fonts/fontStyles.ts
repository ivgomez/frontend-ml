import { createGlobalStyle } from "styled-components";
import BarlowSemiCondensedLightWoff2 from "./BarlowSemiCondensedLight.woff2";

const GlobalFonts = createGlobalStyle`
 /* Avenir Book, light font */
 @font-face {
    font-family: 'Avenir';
    src: url('${BarlowSemiCondensedLightWoff2}') format('woff2');
    font-style: normal;
    font-weight: 300; /* Use for font-weight set as 300 in InVision */
    font-display: swap;
  }
`;

export default GlobalFonts;
