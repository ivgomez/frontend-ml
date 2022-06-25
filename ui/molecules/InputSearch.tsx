import styled from "styled-components";
import { Input } from "../atoms";
import { SearchButton } from "../atoms/SearchButton";
import React from "react";
import { breakpoint } from "@theme";

export const InputSearch = (props: any) => {
  const { handleSearch } = props;
  const icon = "/static/images/icons/iconSearch.png";
  return (
    <InputSearchWrapper>
      <Input {...props} />
      <SearchButton icon={icon} handleSearch={handleSearch} />
    </InputSearchWrapper>
  );
};

const InputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${breakpoint.tablet`
    min-width: 288px;
  `}
`;
