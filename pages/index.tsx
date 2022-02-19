import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Exchanges } from "../components/ExchangesTable/Exchanges";
import { ExchangeListItem } from "../services/CoinGeckoService/CoinGeckoService.types";
import { CoinGeckoService } from "../services/CoinGeckoService/CoinGeckoService";

interface PageProps {
  exchanges: ExchangeListItem[];
}

const Home: NextPage<PageProps> = ({ exchanges }) => {
  return (
    <div>
      <Head>
        <title>Coin Gecko exchanges directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Exchanges exchanges={exchanges} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const coinGeckoService = new CoinGeckoService(fetch);

  return {
    props: {
      exchanges: await coinGeckoService.exchanges({
        page: "1",
        per_page: "10",
      }),
    },
  };
};

export default Home;
