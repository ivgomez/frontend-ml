import { css } from "styled-components";

export const currencyMixin = css`
  &[data-currency]::before {
    display: inline;
  }

  &[data-currency="usd"]::before {
    content: "$";
  }
`;
