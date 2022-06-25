import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "@models/responseModel/Item";
import { ItemCard } from "@ui/molecules";

interface Props {
  items: Item[];
}

export const ItemCardList: FC<Props> = ({ items }) => {
  return (
    <ItemListWrapper>
      {items?.map((item: Item) => (
        <ItemCard key={item?.id} item={item} />
      ))}
    </ItemListWrapper>
  );
};

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
`;
