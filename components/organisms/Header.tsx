import styled from "styled-components";
import { LogoSection } from "@components/atoms/LogoSection";

export const Header = () => (
  <GlobalHeaderWrapper>
    <MainNav>
      <Box className="brand">
        <LogoSectionContainer>
          <LogoSection />
        </LogoSectionContainer>
      </Box>
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
  justify-content: space-around;
  padding: 0 1.5rem;
  font-size: 0.875rem;
  height: 4rem; /* 64px */
`;
