import React from "react";
import styled from "styled-components";
import { Layout } from "@components/Layout/Layout";
import { SearchResponse } from "@models/responseModel/SearchResponse";
import { ItemList } from "@ui/organisms";

export const Search = (props: any) => {
  const { response } = props;
  const { items = [] }: SearchResponse = response;

  return (
    <Layout>
      <SearchSectionWrapper>
        <ItemList items={items} />
      </SearchSectionWrapper>
    </Layout>
  );
};

const SearchSectionWrapper = styled.section`
  padding: 50px;
  height: 100%;
  width: 100%;
`;
