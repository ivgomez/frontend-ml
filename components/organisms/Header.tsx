import styled from "styled-components";
import { breakpoint } from "@theme";
import { LogoSection } from "@components/atoms";
import { InputSearch } from "@components/molecules";

export const Header = () => (
  <GlobalHeaderWrapper>
    <MainNav>
      <Box className="brand">
        <LogoSectionContainer>
          <LogoSection />
        </LogoSectionContainer>
      </Box>
      <InputSearch />
    </MainNav>
  </GlobalHeaderWrapper>
);

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

  ${breakpoint.laptop`
    padding: 0 10rem;
  `}
`;
