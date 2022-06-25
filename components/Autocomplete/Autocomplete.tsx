/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import { debounce, isEmpty, size } from "lodash";
import api from "@api";
import { InputSearch } from "@ui/molecules";
import { ItemList } from "./components/ItemList";
import { useOutsideClick } from "@utils/hooks/useOutsideClick";
import { Item } from "@models/responseModel/Item";

const MIN_SEARCH_VALUE = 2;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ENTER = 13;

export const Autocomplete = ({
  isSearching,
  setIsSearching,
  placeholder,
}: any) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [dropdownResults, setDropdownResults] = useState<any>();

  const ref = useRef();

  /*If clicked outside of the searchbar, close the dropdown*/
  useOutsideClick(ref, () => {
    setIsInputFocus(false);
    setSelectedIndex(0);
  });

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
    if (textToken.length >= MIN_SEARCH_VALUE) {
      getAutoCompleteSuggestions(textToken);
    }
  };

  const isDropDownVisible =
    isInputFocus &&
    !isEmpty(searchValue) &&
    !isSearching &&
    size(dropdownResults) > 0;

  const restorePropsState = () => {
    setIsSearching(false);
    setSearchValue("");
    setIsInputFocus(false);
  };

  const handleItemSelected = (id: string) => {
    router.push(`details/${id}`);
    restorePropsState();
  };

  const nextIndex = () => {
    let nextIndex = selectedIndex + 1;
    if (nextIndex >= size(dropdownResults)) {
      nextIndex = 0;
    }
    setSelectedIndex(nextIndex);
  };

  const previousIndex = () => {
    let prevIndex = selectedIndex - 1;
    if (prevIndex < 0) {
      prevIndex = size(dropdownResults) - 1;
    }
    setSelectedIndex(prevIndex);
  };

  const handleKeyUp = (e: any) => {
    const { items } = dropdownResults || [];

    if (!items?.length) return;

    const keyCode = e.keyCode;
    const selectedItem = items[selectedIndex];

    switch (keyCode) {
      case KEY_UP:
        previousIndex();
        break;
      case KEY_DOWN:
        nextIndex();
        break;
      case KEY_ENTER:
        if (!selectedItem) {
          return;
        }
        handleItemSelected(selectedItem?.id);
        break;
    }
  };

  const handleSearch = () => {
    if (!searchValue) return;
    router.push(`/?q=${searchValue}`);
    restorePropsState();
  };

  const onMouseHover = (id: string) => {
    const { items } = dropdownResults || [];
    if (!items?.length) return;
    const idx = items.findIndex((item: Item) => item?.id === id);
    setSelectedIndex(idx);
  };

  return (
    <SearchBox ref={ref}>
      <InputSearch
        value={searchValue}
        onKeyDown={handleKeyUp}
        placeholder={placeholder}
        handleSearch={handleSearch}
        onChange={handleInputChange}
        onFocus={() => setIsInputFocus(true)}
      />
      {isSearching ? (
        <SearchDropdownWrapper>
          <NoResultItem>Searching Results...</NoResultItem>
        </SearchDropdownWrapper>
      ) : (
        isDropDownVisible && (
          <ResultDropdown>
            <ItemList
              selectedIndex={selectedIndex}
              dropdownResults={dropdownResults}
              onMouseHover={onMouseHover}
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
  padding: ${({ theme }) => theme.spaces?.xxs}
    ${({ theme }) => theme.spaces?.xs};
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  text-align: start;
  background-color: ${({ theme }) => theme.colors?.white};
`;

const ResultDropdown = styled.div`
  top: 52px;
  width: 100%;
  z-index: 1;
  position: absolute;
  border-top: thin solid #eee;
`;
