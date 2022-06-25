import React, { useState } from "react";
import styled from "styled-components";
import { breakpoint } from "@theme";
import { LogoSection } from "../../ui/atoms";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { useWindowSize } from "@utils/hooks";

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const { isMobile } = useWindowSize();
  return (
    <GlobalHeaderWrapper>
      <MainNav>
        {!isMobile && (
          <LogoSectionContainer>
            <LogoSection />
          </LogoSectionContainer>
        )}
        <Box></Box>
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
  font-size: ${({ theme }) => theme.convert?.px.rem(14)};
  height: 4rem;
  padding: ${({ theme }) => theme.spaces?.m};

  ${breakpoint.tablet`
    max-width: 1200px;
    margin: 0 auto;
    left: 0;
    right: 0;
  `}
`;
