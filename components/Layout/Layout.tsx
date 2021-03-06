import styled from "styled-components";
import { Header } from "@ui/organisms";
import { breakpoint } from "@theme";

type ButtonProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: ButtonProps) => (
  <LayoutWrapper>
    <Header />
    <Main>{children}</Main>
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  scroll-behavior: smooth;
`;

const Main = styled.main`
  flex: 1;
  margin: 0 1rem;
  padding-bottom: ${({ theme }: any) => theme.spaces?.xl};
  background-color: ${({ theme }) => theme.colors?.secondary};
  ${breakpoint.desktop`
    max-width: 1200px;
    margin: 0 auto;   
    left: 0;
    right:0;    
  `}
`;
