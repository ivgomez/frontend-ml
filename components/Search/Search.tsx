import React from "react";
import styled from "styled-components";
import { Layout } from "@components/Layout/Layout";
import { SearchResponse } from "@models/responseModel/SearchResponse";
import { ItemCardList } from "@ui/organisms";
import { Breadcrumbs } from "@ui/molecules/Breadcrumbs";
import { NoResultsCard } from "@ui/molecules/NoResultsCard";

export const Search = (props: any) => {
  const { response } = props;
  const { items = [], categories = [] }: SearchResponse = response;

  return (
    <Layout>
      <Breadcrumbs items={categories} />
      <SearchSectionWrapper>
        {items?.length ? <ItemCardList items={items} /> : <NoResultsCard />}
      </SearchSectionWrapper>
    </Layout>
  );
};

const SearchSectionWrapper = styled.section`
  padding: 50px 0;
  height: 100%;
  width: 100%;
`;
