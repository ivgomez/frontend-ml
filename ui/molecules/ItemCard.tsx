import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { TextSmall, TextPrice, TextExtraSmall } from "@ui/atoms/Text";
import { Item } from "@models/responseModel/Item";
import { formatCurrency } from "@utils/helpers/formatterHelper";
import { breakpoint } from "@theme";
interface Props {
  item: Item;
}

export const ItemCard: FC<Props> = ({ item }) => {
  const { id, title, price, picture, location, freeShipping } = item || {};
  const { amount, currency, decimals } = price || {};
  const priceFormatted = formatCurrency(amount, currency, decimals);
  return (
    <Link href={`details/${id}`}>
      <ItemCardWrapper>
        <ImageSection>
          <Image
            layout="fixed"
            src={picture}
            alt="produdct"
            width={180}
            height={180}
            quality={100}
          />
        </ImageSection>

        <InfoSection>
          <PriceSection>
            <PriceInfoSection>
              <TextPrice marginRight="10px">{priceFormatted}</TextPrice>
              {freeShipping && (
                <Image
                  layout="fixed"
                  src="/static/images/icons/iconShipping.png"
                  alt="produdct"
                  width={20}
                  height={20}
                  quality={100}
                />
              )}
            </PriceInfoSection>
            <div>
              <LocationSection>
                <TextExtraSmall>{location}</TextExtraSmall>
              </LocationSection>
            </div>
          </PriceSection>
          <TextSmall>{title}</TextSmall>
        </InfoSection>
      </ItemCardWrapper>
    </Link>
  );
};

const ItemCardWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  height: 150px;
  cursor: pointer;
  border-bottom: thin solid #eee;
`;

const InfoSection = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spaces?.xs};
  width: 100%;
  min-width: 120px;
  flex-direction: column;
`;

const ImageSection = styled.div`
  padding: ${({ theme }) => theme.spaces?.xs};
  span {
    border-radius: 4px;
  }
`;

const LocationSection = styled.div`
  min-width: 120px;
  ${breakpoint.tablet`
    padding: 0 50px;
  `}
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-bottom: ${({ theme }) => theme.spaces?.m};
  ${breakpoint.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const PriceInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: baseline;
  margin-top: ${({ theme }) => theme.spaces?.xs};
`;
