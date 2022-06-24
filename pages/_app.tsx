import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import NextNProgress from "nextjs-progressbar";
import getPageContext from "../lib/getPageContext";
import GlobalStyles from "../lib/GlobalStyles";
import ErrorBoundary from "@components/Global/ErrorBoundary";

const DynamicGlobalFonts = dynamic(() => import("../public/fonts/fontStyles"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const pageContext = getPageContext();
  return (
    <ThemeProvider theme={pageContext.theme}>
      <GlobalStyles />
      <DynamicGlobalFonts />
      <ErrorBoundary>
        <NextNProgress />
        <Component {...pageProps} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
