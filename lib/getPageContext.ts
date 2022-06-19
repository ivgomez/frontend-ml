import theme from "@theme";

function createPageContext() {
  return {
    theme,
  };
}

let pageContext: any;

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }

  // Reusing context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
