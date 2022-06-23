import styled from "styled-components";
import { breakpoint } from "@theme";
import { TextBase } from "@components/Typography/TextBase";

interface ITextBase {
  fontWeight?: string;
  isProductDetail?: any;
  theme?: any;
  color?: string;
}

export const TextMedium = styled(TextBase)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.3px;
  ${breakpoint.tablet`
    font-size:  ${({ theme }: ITextBase) => theme.fontSize?.fontSize28px};
    margin-bottom: 2rem;
  `}
`;

export const TextStandard = styled(TextBase)<ITextBase>`
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0.3px;
  font-weight: ${({ fontWeight }) => fontWeight};
  ${breakpoint.tablet`
    font-size: 1.5rem;
    line-height: 1em;
    margin-bottom: 2rem;
  `}
`;

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

export const TextSubHeader = styled(TextBase)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 1.6px;
`;

export const TextPrice = styled(TextBase)<ITextBase>`
  font-size: ${({ theme }) => theme.fontSize?.fontSize24px};
  letter-spacing: 0;
  ${breakpoint.tablet`
    font-size: ${({ isProductDetail, theme }: ITextBase) =>
      isProductDetail && theme.fontSize?.fontSize46px};
    margin-bottom: ${({ isProductDetail }: ITextBase) =>
      isProductDetail && "2rem"};
  `}
`;
