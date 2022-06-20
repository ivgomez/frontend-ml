/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

export const SearchButton = ({ icon, children }: any) => (
  <SearchButtonWrapper>
    {icon && (
      <IconWrapper>
        <img src={icon} alt="search" data-e2e-brand="search" />
      </IconWrapper>
    )}
    {children}
  </SearchButtonWrapper>
);

const SearchButtonWrapper = styled.button`
  padding: 12px 18px;
  height: 40px;
  width: 50px;
  border: 0;
  border-radius: 0 4px 4px 0;
`;

const IconWrapper = styled.span`
  margin-right: 1rem;
  @media (max-width: 551px) {
    margin-right: 0;
  }
`;
