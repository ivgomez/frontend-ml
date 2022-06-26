import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "@theme";

const Content404 = () => (
  <>
    <h2>Page Not Found</h2>
    <h4>La pagina a la que intenta acceder no exite</h4>
  </>
);

const Content500 = () => (
  <>
    <h2>WOPS</h2>
    <h4>Something went wrong :(</h4>
  </>
);

export const CustomError = ({ statusCode }: any) => (
  <PageWrapper>
    <ImageSection>
      <div>
        <Image
          src="/static/images/404.png"
          alt="Error Code"
          width={500}
          height={500}
        />
      </div>
    </ImageSection>
    <TextContent>
      <h1>{statusCode}</h1>
      {statusCode === 500 ? <Content500 /> : <Content404 />}
    </TextContent>
  </PageWrapper>
);

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

export default CustomError;
