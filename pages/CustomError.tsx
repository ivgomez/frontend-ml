/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "@theme";
import { Button } from "@ui/atoms";
import { Header } from "@ui/organisms";

const Content404 = () => (
  <>
    <h2>Página no encontrada</h2>
    <p>La página a la que intentas acceder no existe.</p>
  </>
);

const Content500 = () => (
  <>
    <h2>Error interno del servidor</h2>
    <p>¡Sentimos los inconvenientes, estamos trabajando en ello!</p>
  </>
);

const CustomError = ({ statusCode }: any) => {
  const src =
    statusCode === 500 ? "/static/images/500.svg" : "/static/images/404.svg";
  return (
    <>
      <Header />
      <PageWrapper>
        <ImageSection>
          <div>
            <Image src={src} alt="Error Code" width={500} height={500} />
          </div>
        </ImageSection>
        <TextContent>
          <h1>Error {statusCode}</h1>
          {statusCode === 500 ? <Content500 /> : <Content404 />}
          <a href="/">
            <Button>Volver al home</Button>
          </a>
        </TextContent>
      </PageWrapper>
    </>
  );
};

export default CustomError;

const ImageSection = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  ${breakpoint.tablet`
    flex-direction: column;
    margin-right: 2rem;
  `}
`;

const TextContent = styled.div`
  text-align: center;
  h1 {
    font-size: 3em;
    color: ${({ theme }) => theme.colors?.hover};
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.3em;
    color: ${({ theme }) => theme.colors?.grayLight};
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1em;
    color: ${({ theme }) => theme.colors?.grayDark};
    margin-bottom: 1rem;
  }

  ${breakpoint.tablet`
    text-align: left;
    h1{
      font-size: 4em;
    }
    h2{
      font-size: 1.7em;
      margin-bottom: 2rem;
    }
    p{
      font-size: 1.4em;
      margin-bottom: 2rem;
      max-width: 80%;
    }
  `}
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 2rem;
  ${breakpoint.tablet`
    flex-direction: row;
    height: calc(100vh - 64px);
    max-width: 1200px;
    margin:auto;
  `}
`;
