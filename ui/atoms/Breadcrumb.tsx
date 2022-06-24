import { breakpoint } from "@theme";
import React from "react";
import styled from "styled-components";

export const Breadcrumb = ({ item = "" }: string | any) => (
  <BreadCrumbWrapper>{item}</BreadCrumbWrapper>
);

const BreadCrumbWrapper = styled.p`
  color: ${({ theme }) => theme.colors?.grayLight};
  cursor: pointer;
  padding-right: 2rem;
  padding-bottom: 0.3rem;
  &:not(:last-child):after {
    content: ">";
    cursor: auto;
    padding-left: 0.5rem;
  }

  &:first-child {
    padding-left: 0;
  }

  ${breakpoint.tablet`
    padding-right: 0.5rem;
  `}
`;
