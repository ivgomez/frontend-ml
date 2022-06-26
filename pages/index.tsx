import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import api from "@api";
import { Search } from "@components/Search/Search";
import Error from "./Error";

const SearchPage: NextPage = (props) => {
  const { errorCode }: any = props;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {errorCode ? <Error statusCode={errorCode} /> : <Search {...props} />}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const { q } = query;
  let response = {};
  let errorCode = {};
  try {
    const axiosResponse = await api.search(q as string);
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

export default SearchPage;
