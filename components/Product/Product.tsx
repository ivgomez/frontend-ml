import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import capitalize from "lodash/capitalize";
import { breakpoint } from "@theme";
import { Layout } from "@components/Layout/Layout";
import {
  TextSmall,
  TextMedium,
  TextPrice,
  TextExtraSmall,
  TextStandard,
} from "@ui/atoms/Text";
import { Item } from "@models/responseModel/Item";
import { formatCurrency } from "@utils/helpers/formatterHelper";

interface Props {
  response: {
    item: Item;
  };
  query: string;
}

export const Product: FC<Props> = (props) => {
  const {
    response: { item },
  } = props;
  const { description, condition, title, picture, price } = item;
  const { amount, currency } = price;
  const priceFormatted = formatCurrency(amount, currency);
  return (
    <Layout>
      <ProductWrapper>
        <ProductCardWrapper>
          <HeaderCardWrapper>
            <SideBarWrapper>
              <Image
                layout="fixed"
                src={picture}
                alt="produdct"
                width={300}
                height={300}
                quality={100}
              />
            </SideBarWrapper>
            <ContentWrapper>
              <TextExtraSmall>{capitalize(condition)}</TextExtraSmall>
              <TextStandard>{title}</TextStandard>
              <TextPrice>{priceFormatted}</TextPrice>
              <div>button</div>
            </ContentWrapper>
          </HeaderCardWrapper>
          <FooterWrapper>
            <TextMedium>Descripcion</TextMedium>
            <TextSmall>{description}</TextSmall>
          </FooterWrapper>
        </ProductCardWrapper>
      </ProductWrapper>
    </Layout>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem 0;
`;

const ProductCardWrapper = styled.section`
  flex: 1;
  width: 100%;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

const HeaderCardWrapper = styled.header`
  display: flex;
  flex-direction: column-reverse;
  ${breakpoint.tablet`
    flex-direction: row;
  `}
`;

const SideBarWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.tablet`
    margin: 0 2rem;
    min-width: 170px;
  `}
`;

const FooterWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
`;
