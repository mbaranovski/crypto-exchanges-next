import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Exchange } from "../../services/CoinGeckoService/CoinGeckoService.types";
import { CoinGeckoService } from "../../services/CoinGeckoService/CoinGeckoService";
import { ExchangeDetails } from "../../components/ExchangeDetails/ExchangeDetails";

interface PageProps {
  exchange: Exchange | null;
}

interface RouteParams extends ParsedUrlQuery {
  exchangeId: string;
}

const ExchangeDetailsPage: NextPage<PageProps> = ({ exchange }) => {
  const router = useRouter();
  if (router.isFallback) return <div>loading...</div>;

  if (!exchange) return <div>exchange not found</div>;

  return <ExchangeDetails exchange={exchange} />;
};

export const getStaticProps: GetStaticProps<PageProps, RouteParams> = async ({
  params,
}) => {
  const coinGeckoService = new CoinGeckoService(fetch);

  return {
    props: {
      exchange: params?.exchangeId
        ? await coinGeckoService.exchange(params.exchangeId)
        : null,
    },
  };
};

export const getStaticPaths: GetStaticPaths<RouteParams> = async (context) => {
  const coinGeckoService = new CoinGeckoService(fetch);

  const exchanges = await coinGeckoService.exchanges({
    page: "1",
    per_page: "10",
  });

  return {
    paths: exchanges.map(({ id }) => ({ params: { exchangeId: id } })),
    fallback: true,
  };
};

export default ExchangeDetailsPage;
