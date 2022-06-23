import Head from "next/head";
import type { NextPage, NextPageContext } from "next";
import api from "@api";
import { Search } from "@components/Search/Search";

const SearchPage: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Search {...props} />
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const { q } = query;
  let response = {};
  try {
    const axiosResponse = await api.search(q as string);
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

export default SearchPage;
