import { breakpoint } from "@theme";
import Image from "next/image";
import styled from "styled-components";

export default function Custom500() {
  return (
    <PageWrapper>
      <ImageSection>
        <div>
          <Image
            src="/static/images/404.png"
            alt="404"
            width={500}
            height={500}
          />
        </div>
        <div>
          <a href="https://pngtree.com/so/404">404 png from pngtree.com</a>
        </div>
      </ImageSection>
      <TextContent>
        <h1>Woops! </h1>
        <h2>Something went wrong</h2>
      </TextContent>
    </PageWrapper>
  );
}

const ImageSection = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  ${breakpoint.tablet`
    flex-direction: column;
  `}
`;

const TextContent = styled.div`
  text-align: center;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${breakpoint.tablet`
    flex-direction: row;
  `}
`;
