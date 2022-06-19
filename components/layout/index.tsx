import styled from "styled-components";
import { Header } from "../organisms";

type ButtonProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: ButtonProps) => (
  <LayoutWrapper>
    <Header />
    <div className="flex-1">{children}</div>
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  scroll-behavior: smooth;
`;
