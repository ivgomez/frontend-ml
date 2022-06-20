import styled from "styled-components";
import { Input } from "@components/atoms";
import { SearchButton } from "@components/atoms/SearchButton";
import React from "react";
import buttonIcon from "@static/images/icons/iconSearch.png";

export const InputSearch = () => {
  return (
    <InputSearchWrapper>
      <Input />
      <SearchButton icon={buttonIcon.src} />
    </InputSearchWrapper>
  );
};

const InputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 288px;
`;
