import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import api from "@api";
import { Product } from "@components/Product/Product";
import CustomError from "@pages/CustomError";

const ProductPage: NextPage = (props) => {
  const { errorCode, isErrorCode, response, query }: any = props;
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      {isErrorCode ? (
        <CustomError statusCode={errorCode} />
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
  let errorCode = 200;
  let isErrorCode = false;
  try {
    const axiosResponse = await api.getItemById(productId as string);
    response = axiosResponse.data;
    const { err }: any = response;
    errorCode = err.status;
    isErrorCode = errorCode === 500 || errorCode === 404 || false;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      response,
      query,
      isErrorCode,
      errorCode,
    },
  };
}

export default ProductPage;
