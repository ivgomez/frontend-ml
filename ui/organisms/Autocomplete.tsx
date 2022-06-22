import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import { debounce, isEmpty, size } from "lodash";
import api from "@api";
import { InputSearch } from "@ui/molecules";
import { ItemList } from "@ui/molecules/ItemList";
import { useOutsideClick } from "@utils/hooks/useOutsideClick";

const minSearchValueLength = 2;

export const Autocomplete = ({
  isSearching,
  setIsSearching,
  placeholder,
}: any) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [dropdownResults, setDropdownResults] = useState([]);

  const ref = useRef();

  /*If clicked outside of the searchbar, close the dropdown*/
  useOutsideClick(ref, () => setIsInputFocus(false));

  const fetchDropdownResults = (textValue: string) => {
    setIsSearching(true);
    api
      .search(textValue)
      .then((response) => {
        if (response?.status !== 200) {
          setIsSearching(false);
          return;
        }
        const responseData = response.data;
        setDropdownResults(responseData);
        setIsSearching(false);
      })
      .catch((e) => {
        if (!axios.isCancel(e)) {
          console.error(
            "Error while getting & manipulating autocomplete content - ",
            e
          );
          setIsSearching(false);
        }
      });
  };

  const fetchResultsDebounced = debounce(fetchDropdownResults, 300, {
    leading: true,
  });

  const getAutoCompleteSuggestions = useCallback((textToken: string) => {
    fetchResultsDebounced(textToken);
  }, []);

  const handleInputChange = (e: any) => {
    const textToken = e.target.value;
    setSearchValue(textToken);
    setIsInputFocus(true);
    if (textToken.length >= minSearchValueLength) {
      getAutoCompleteSuggestions(textToken);
    }
  };

  const isDropDownVisible =
    isInputFocus &&
    !isEmpty(searchValue) &&
    !isSearching &&
    size(dropdownResults) > 0;

  const handleItemSelected = async (item: string) => {
    router.push(`/${item}`);
    setIsSearching(false);
    setSearchValue("");
    setIsInputFocus(false);
  };

  return (
    <SearchBox ref={ref}>
      <InputSearch
        onChange={handleInputChange}
        value={searchValue}
        placeholder={placeholder}
      />
      {isSearching ? (
        <SearchDropdownWrapper>
          <NoResultItem>Searching Results...</NoResultItem>
        </SearchDropdownWrapper>
      ) : (
        isDropDownVisible && (
          <ResultDropdown>
            <ItemList
              dropdownResults={dropdownResults}
              handleItemSelected={handleItemSelected}
            />
          </ResultDropdown>
        )
      )}
    </SearchBox>
  );
};

const SearchBox = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

const SearchDropdownWrapper = styled.div`
  top: 52px;
  width: 100%;
  position: absolute;
`;

const NoResultItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  text-align: start;
  background-color: ${({ theme }) => theme.colors?.white};
  b {
    font-weight: bold;
  }
`;

const ResultDropdown = styled.div`
  top: 52px;
  width: 100%;
  z-index: 1;
  position: absolute;
`;
