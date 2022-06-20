import React from "react";
import styled from "styled-components";

export const ItemList = ({ dropdownResults, handleItemSelected }: any) => {
  const { items } = dropdownResults;

  return items.map((item: any) => (
    <StyledAnchor key={item.id}>
      <DropdownMenuItemAutoComplete onClick={() => handleItemSelected(item.id)}>
        <div>{item.title}</div>
      </DropdownMenuItemAutoComplete>
    </StyledAnchor>
  ));
};

const DropdownMenuItemAutoComplete = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors?.white};
  b {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    background-color: #3483fa;
    color: white;
  }
`;

const StyledAnchor = styled.a`
  height: 100% !important;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration-line: none;
`;
