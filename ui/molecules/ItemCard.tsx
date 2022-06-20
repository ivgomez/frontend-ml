import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { TextSmall, TextPrice, TextExtraSmall } from "@ui/atoms/Text";
import { Item } from "@models/responseModel/Item";
import { formatCurrency } from "@utils/helpers/formatterHelper";
interface Props {
  item: Item;
}

export const ItemCard: FC<Props> = ({ item }) => {
  const { id, title, price, picture, location } = item;
  const { amount, currency, decimals } = price;
  const priceFormatted = formatCurrency(amount, currency, decimals);
  return (
    <Link href={`/${id}`}>
      <ItemCardWrapper>
        <LeftRow>
          <ImageWrapper>
            <Image
              layout="fixed"
              src={picture}
              alt="produdct"
              width={100}
              height={100}
              quality={100}
            />
          </ImageWrapper>

          <InfoWrapper>
            <TextPrice>{priceFormatted}</TextPrice>
            <TextSmall>{title}</TextSmall>
          </InfoWrapper>
        </LeftRow>
        <LocationWrapper>
          <TextExtraSmall>{location}</TextExtraSmall>
        </LocationWrapper>
      </ItemCardWrapper>
    </Link>
  );
};

const ItemCardWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  justify-content: space-between;
  border-bottom: thin solid #eee;
`;

const LeftRow = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 10px;
  min-width: 120px;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  padding: 10px;
`;

const LocationWrapper = styled.div`
  min-width: 120px;
  padding: 0 50px;
`;
