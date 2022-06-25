import { FC } from "react";
import { breakpoint } from "@theme";
import styled from "styled-components";

type Props = {
  children: string;
};

export const Button: FC<Props> = ({ children }) => {
  return <ButtonWrapper type="button">{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors?.hover};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors?.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize?.fontSize16px};
  padding: ${({ theme }) => theme.spaces?.xs} 0;

  ${breakpoint.tablet`
    margin-top: 0;
    margin-bottom: ${({ theme }: any) => theme.spaces?.m};
  `}
`;
