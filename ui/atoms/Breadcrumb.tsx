import React from "react";
import styled from "styled-components";

export const Breadcrumb = ({ item = "" }: string | any) => (
  <BreadCrumbWrapper>{item}</BreadCrumbWrapper>
);

const BreadCrumbWrapper = styled.p`
  color: ${({ theme }) => theme.colors?.grayLight};
  cursor: pointer;
  padding-right: 0.5rem;
  &:not(:last-child):after {
    content: ">";
    cursor: auto;
    padding-left: 0.5rem;
  }
`;
