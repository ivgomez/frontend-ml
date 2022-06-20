import styled from "styled-components";
import { TextBase } from "@components/Typography/TextBase";

export const TextMedium = styled(TextBase)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.3px;
`;

export const TextStandard = styled(TextBase)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0.3px;
`;

export const TextSmall = styled(TextBase)`
  font-size: ${({ theme }) => theme.convert.px.rem(14)};
  line-height: 1.57;
  letter-spacing: 0.3px;
`;

export const TextExtraSmall = styled(TextBase)`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors?.gray};
`;

export const TextSubHeader = styled(TextBase)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 1.6px;
`;

export const TextPrice = styled(TextBase)`
  font-size: ${({ theme }) => theme.fontSize?.fontSize24px};
  letter-spacing: 0;
`;
