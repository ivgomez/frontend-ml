import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import api from "@api";
import { Search } from "@components/Search/Search";
import CustomError from "@pages/CustomError";

const SearchPage: NextPage = (props) => {
  const { errorCode, isErrorCode }: any = props;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {isErrorCode ? (
        <CustomError statusCode={errorCode} />
      ) : (
        <Search {...props} />
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const { q } = query;
  let response = {};
  let errorCode = 200;
  let isErrorCode = false;
  try {
    const axiosResponse = await api.search(q as string);
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

export default SearchPage;
