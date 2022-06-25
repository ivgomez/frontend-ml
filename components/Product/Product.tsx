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
    categories: string[];
  };
  query: string;
};

export const Product: FC<Props> = (props) => {
  const {
    response: { item, categories = [] },
  } = props;

  const { description, condition, title, picture, price } = item || {};
  const { amount, currency } = price || {};
  const priceFormatted = formatCurrency(amount, currency);
  return (
    <Layout>
      <Breadcrumbs items={categories} />
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
              <TextPrice isProductDetail marginTop="0.5rem">
                {priceFormatted}
              </TextPrice>
              <ButtonContainer>
                <Button>Comprar</Button>
              </ButtonContainer>
            </ContentWrapper>
          </HeaderCardWrapper>
          <FooterWrapper>
            <DescriptionTitle>Descripción del producto</DescriptionTitle>
            <DescriptionWrapper>{description}</DescriptionWrapper>
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
  padding: 0 ${({ theme }) => theme.spaces?.m};

  ${breakpoint.laptop`
    padding: 0 ${({ theme }: any) => theme.spaces?.m};
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
  padding-top: ${({ theme }) => theme.spaces?.m};
  ${breakpoint.tablet`
    flex-direction: row;
  `}
  ${breakpoint.laptop`
    padding-top: 0rem;
    margin-bottom: ${({ theme }: any) => theme.spaces?.xl};
  `}
`;

const SideBarWrapper = styled.div`
  position: relative;
  height: 380px;
  margin-bottom: ${({ theme }) => theme.spaces?.xs};
  ${breakpoint.tablet`
    height: 500px;
    width: 100%;
    margin: 0 ${({ theme }: any) => theme.spaces?.m};
  `}
  ${breakpoint.laptop`
    height: 700px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.laptop`
    margin: ${({ theme }: any) => theme.spaces?.m};
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spaces?.m} 0;
  ${breakpoint.laptop`
    padding: 0;
  `}
`;

const FooterWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spaces?.xs} 0;
  padding-bottom: 0;
  flex-direction: column;
  ${breakpoint.laptop`
    margin-right: ${({ theme }: any) => theme.spaces?.m};
    width: calc(70% - 2rem);
  `}
`;

const DescriptionWrapper = styled(TextSmall)`
  margin-bottom: ${({ theme }) => theme.spaces?.m};
  ${breakpoint.tablet`
    color: ${({ theme }: any) => theme.colors?.grayLight};
 `}
`;

const DescriptionTitle = styled(TextMedium)`
  font-size: ${({ theme }: any) => theme.fontSize?.fontSize24px};
  font-weight: "bold";
  margin-bottom: ${({ theme }: any) => theme.spaces?.m};
`;
