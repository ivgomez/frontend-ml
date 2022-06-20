import styled from "styled-components";
import { textMixin } from "./mixin/TextMixin";
import { currencyMixin } from "./mixin/currencyMixin";

export const TextBase = styled.span.attrs({
  "data-text": true,
})`
  ${textMixin}
  ${currencyMixin}
  color: inherit;
`;
