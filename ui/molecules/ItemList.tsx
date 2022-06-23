import React from "react";
import styled from "styled-components";

export const ItemList = ({
  selectedIndex,
  dropdownResults,
  handleItemSelected,
}: any) => {
  const { items } = dropdownResults;
  const selectedItem = items[selectedIndex];
  return items?.map((item: any) => {
    const isCurrentIndex = item == selectedItem;
    return (
      <StyledAnchor key={item?.id}>
        <DropdownMenuItemAutoComplete
          isCurrentIndex={isCurrentIndex}
          onClick={() => handleItemSelected(item?.id)}
        >
          <div>{item?.title}</div>
        </DropdownMenuItemAutoComplete>
      </StyledAnchor>
    );
  });
};

const DropdownMenuItemAutoComplete = styled.div<any>`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 20px;
  padding: 10px 20px;

  background-color: ${({ theme, isCurrentIndex }) =>
    isCurrentIndex ? theme.colors?.hover : theme.colors?.white};

  color: ${({ theme, isCurrentIndex }) =>
    isCurrentIndex && theme.colors?.white};

  :hover {
    background-color: ${({ theme }) => theme.colors?.hover};
    color: ${({ theme }) => theme.colors?.white};
  }
`;

const StyledAnchor = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration-line: none;
`;
