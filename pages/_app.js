import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../src/layout/Layout";

function MyApp({ Component, pageProps }) {
  const noHeader = Component?.noHeader ?? false;

  return (
    <Fragment>
      <Head>
        <title>Richa Gupta | Portfolio Website</title>
      </Head>
      <Layout noHeader={noHeader}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
