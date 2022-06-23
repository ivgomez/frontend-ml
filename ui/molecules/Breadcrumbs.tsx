import { Breadcrumb } from "@ui/atoms";
import React from "react";
import styled from "styled-components";

export const Breadcrumbs = ({ items = [] }: any) => (
  <BreadCrumbsWrapper>
    {items.map((item: string, index: number) => (
      <Breadcrumb key={index} item={item} />
    ))}
  </BreadCrumbsWrapper>
);

const BreadCrumbsWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
`;
