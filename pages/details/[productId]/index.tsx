import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import api from "@api";
import { Product } from "@components/Product/Product";

const ProductPage: NextPage = ({ response, query }: any) => {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <Product response={response} query={query} />
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const { productId } = query;
  let response = {};
  try {
    const axiosResponse = await api.getItemById(productId as string);
    response = axiosResponse.data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      response,
      query,
    },
  };
}

export default ProductPage;
