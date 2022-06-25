import { breakpoint } from "@theme";
import React from "react";
import styled from "styled-components";

export const Breadcrumb = ({ item = "" }: string | any) => (
  <BreadCrumbWrapper>{item}</BreadCrumbWrapper>
);

const BreadCrumbWrapper = styled.p`
  color: ${({ theme }) => theme.colors?.grayLight};
  padding-bottom: ${({ theme }) => theme.convert?.px.rem(4.8)};
  cursor: pointer;

  &:first-child {
    padding-left: 0;
  }

  &:not(:last-child) {
    padding-right: ${({ theme }) => theme.spaces?.xxs};
  }

  &:not(:last-child):after {
    content: ">";
    cursor: auto;
    padding-left: ${({ theme }) => theme.spaces?.xxs};
  }
`;
