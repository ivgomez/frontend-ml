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
  background-color: ${({ theme }) => theme.colors?.secondary};
  ${breakpoint.laptop`
    padding: 0 10rem;
  `}
`;
