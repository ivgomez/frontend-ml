import styled from "styled-components";
import { breakpoint } from "@theme";
import { TextBase } from "@components/Typography/TextBase";

interface ITextBase {
  fontWeight?: string;
  isProductDetail?: any;
  theme?: any;
  color?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
}

export const TextMedium = styled(TextBase)<ITextBase>`
  font-size: 1.125rem;
  letter-spacing: 0.3px;
  ${breakpoint.tablet`
    font-size:  ${({ theme }: ITextBase) => theme.fontSize?.fontSize28px};
    margin-bottom: 2rem;
  `}
`;

TextMedium.displayName = "TextMedium";

export const TextStandard = styled(TextBase)<ITextBase>`
  font-size: 1.25rem;
  letter-spacing: 0.3px;
  font-weight: ${({ fontWeight }) => fontWeight};
  ${breakpoint.tablet`
    font-size: 1.5rem;
    line-height: 1.4em;
    margin-bottom: 2rem;
  `}
`;

TextStandard.displayName = "TextStandard";

export const TextSmall = styled(TextBase)<ITextBase>`
  font-size: ${({ theme }) => theme.convert.px.rem(14)};
  line-height: 1.57;
  letter-spacing: 0.3px;
  color: ${({ color }) => color};
  ${breakpoint.tablet`
    font-size:  ${({ isProductDetail }: ITextBase) =>
      isProductDetail && "1rem"};
  `}
`;

TextSmall.displayName = "TextSmall";

export const TextExtraSmall = styled(TextBase)<ITextBase>`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors?.gray};
  ${breakpoint.tablet`
    font-size: ${({ isProductDetail, theme }: ITextBase) =>
      isProductDetail && theme.fontSize?.fontSize14px};
    margin-bottom: ${({ isProductDetail }: ITextBase) =>
      isProductDetail && "1rem"};
  `}
`;

TextExtraSmall.displayName = "TextExtraSmall";

export const TextSubHeader = styled(TextBase)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 1.6px;
`;

TextSubHeader.displayName = "TextSubHeader";

export const TextPrice = styled(TextBase)<ITextBase>`
  font-size: ${({ theme }) => theme.fontSize?.fontSize28px};
  letter-spacing: 0;
  margin-top: ${({ marginTop }) => marginTop || "0"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};
  margin-right: ${({ marginRight }) => marginRight || "0"};
  margin-right: ${({ marginRight }) => marginRight || "0"};
`;

TextPrice.displayName = "TextPrice";
