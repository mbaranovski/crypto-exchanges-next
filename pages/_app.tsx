import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Coin Gecko exchanges directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
