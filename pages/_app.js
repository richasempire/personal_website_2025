import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Richa Gupta | Portfolio Website</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
