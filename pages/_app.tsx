import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import getPageContext from "../lib/getPageContext";
import GlobalStyles from "../lib/GlobalStyles";
const DynamicGlobalFonts = dynamic(() => import("../public/fonts/fontStyles"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const pageContext = getPageContext();
  return (
    <ThemeProvider theme={pageContext.theme}>
      <GlobalStyles />
      <DynamicGlobalFonts />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
