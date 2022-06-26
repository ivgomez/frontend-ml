import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import api from "@api";
import { Product } from "@components/Product/Product";
import Error from "../../Error";

const ProductPage: NextPage = (props) => {
  const { errorCode, response, query }: any = props;
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      {errorCode ? (
        <Error statusCode={errorCode} />
      ) : (
        <Product response={response} query={query} />
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const { productId } = query;
  let response = {};
  let errorCode = {};
  try {
    const axiosResponse = await api.getItemById(productId as string);
    response = axiosResponse.data;
    const { err, ok }: any = response;
    errorCode = ok ? false : err.status;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      response,
      query,
      errorCode,
    },
  };
}

export default ProductPage;
