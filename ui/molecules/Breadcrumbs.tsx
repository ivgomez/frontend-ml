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

// const BreadCrumbsWrapper = styled.div`
//   display: -webkit-inline-box;
//   width: 1200px;
//   margin: 0 auto;
//   margin: 1rem 0;
//   overflow-x: auto;

//   &::-webkit-scrollbar {
//     height: 3px;
//   }

//   &::-webkit-scrollbar-track {
//     background: transparent;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: ${({ theme }) => theme.colors?.grayLight};
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: ${({ theme }) => theme.colors?.gray};
//   }
// `;

const BreadCrumbsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  overflow: hidden;
`;
