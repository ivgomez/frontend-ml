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
import { Breadcrumbs, Button } from "@ui/molecules";

type Props = {
  response: {
    item: Item;
  };
  query: string;
};

export const Product: FC<Props> = (props) => {
  const {
    response: { item },
  } = props;
  const items = [
    "Electrónica, audio y video",
    "Celulares y telefonía",
    "Reproductores",
  ];
  const { description, condition, title, picture, price } = item || {};
  const { amount, currency } = price || {};
  const priceFormatted = formatCurrency(amount, currency);
  return (
    <Layout>
      <Breadcrumbs items={items} />
      <ProductWrapper>
        <ProductCardWrapper>
          <HeaderCardWrapper>
            <SideBarWrapper>
              <Image
                layout="fill"
                objectFit="contain"
                src={picture}
                alt="product"
                quality={100}
              />
            </SideBarWrapper>
            <ContentWrapper>
              <TextExtraSmall isProductDetail>
                {capitalize(condition)}
              </TextExtraSmall>
              <TextStandard fontWeight="bold">{title}</TextStandard>
              <TextPrice isProductDetail>{priceFormatted}</TextPrice>
              <Button>Comprar</Button>
            </ContentWrapper>
          </HeaderCardWrapper>
          <FooterWrapper>
            <TextMedium>Descripción del producto</TextMedium>
            <TextSmall isProductDetail>{description}</TextSmall>
          </FooterWrapper>
        </ProductCardWrapper>
      </ProductWrapper>
    </Layout>
  );
};

const ProductWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: ${({ theme }) => theme.spaces?.m};
  ${breakpoint.laptop`
    padding: ${({ theme }: any) => theme.spaces?.m} 0;
  `}
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
  flex-direction: column;
  ${breakpoint.tablet`
    flex-direction: row;
  `}
  ${breakpoint.laptop`
    margin-bottom: 3rem;
  `}
`;

const SideBarWrapper = styled.div`
  position: relative;
  height: 380px;
  margin-bottom: ${({ theme }) => theme.spaces?.xs};
  ${breakpoint.tablet`
    height: 500px;
    width: 100%;
    margin-right: ${({ theme }: any) => theme.spaces?.m};
  `}
  ${breakpoint.laptop`
    height: 700px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.laptop`
    margin: 0 ${({ theme }: any) => theme.spaces?.m};
    width: calc(30% - 2rem);
  `}
`;

const FooterWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spaces?.xs} 0;
  flex-direction: column;
  ${breakpoint.laptop`
    padding-left: ${({ theme }: any) => theme.spaces?.m};
    margin-bottom: ${({ theme }: any) => theme.spaces?.m};
    margin-right: ${({ theme }: any) => theme.spaces?.m};
    width: calc(70% - 2rem);
  `}
`;

const BuyButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors?.hover};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors?.white};
  cursor: pointer;
  font-size: 1rem;
  margin-top: ${({ theme }: any) => theme.spaces?.xs};
  padding: ${({ theme }: any) => theme.spaces?.xs} 0;

  ${breakpoint.tablet`
    margin-top: 0;
    margin-bottom: ${({ theme }: any) => theme.spaces?.m};
  `}
`;
