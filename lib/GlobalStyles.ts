import * as styled from "styled-components";

export default styled.createGlobalStyle`
  #root {
    margin: 0 auto;
  }
  html,
  body {
    background-color: ${({ theme }) => theme.colors?.secondary};
    padding: 0;
    margin: 0;
    font-family: "Barlow Semi Condensed", sans-serif, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Barlow Semi Condensed", sans-serif, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue;
  }
`;
