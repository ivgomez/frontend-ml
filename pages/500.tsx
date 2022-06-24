import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "@theme";

export default function Custom500() {
  return (
    <PageWrapper>
      <ImageSection></ImageSection>
      <TextContent>
        <h1>500 - Server-side error occurred</h1>
      </TextContent>
    </PageWrapper>
  );
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSection = styled.div``;

export const TextContent = styled.div``;
