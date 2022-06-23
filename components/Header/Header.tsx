import React, { useState } from "react";
import styled from "styled-components";
import { breakpoint } from "@theme";
import { LogoSection } from "../../ui/atoms";
import { Autocomplete } from "../Autocomplete/Autocomplete";

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <GlobalHeaderWrapper>
      <MainNav>
        <Box>
          <LogoSectionContainer>
            <LogoSection />
          </LogoSectionContainer>
        </Box>
        <Autocomplete
          isSearching={isSearching}
          placeholder="nunca dejes de buscar"
          setIsSearching={setIsSearching}
        />
      </MainNav>
    </GlobalHeaderWrapper>
  );
};

const GlobalHeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors?.primary};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  &.brand {
    flex: 1;
  }
`;

const LogoSectionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 0.875rem;
  height: 4rem;
  padding: 2rem;

  ${breakpoint.laptop`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    left: 0;
    right: 0;
  `}
`;
