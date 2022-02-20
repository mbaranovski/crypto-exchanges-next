import type { GetStaticProps, NextPage } from "next";
import { ExchangesTable } from "../components/Exchanges/ExchangesTable";
import { ExchangeListItem } from "../services/CoinGeckoService/CoinGeckoService.types";
import { CoinGeckoService } from "../services/CoinGeckoService/CoinGeckoService";
import { Box, Heading } from "../components/shared.styled";
import { ExchangesStyled } from "../components/Exchanges/Exchanges.styled";

interface PageProps {
  exchanges: ExchangeListItem[];
}

const Home: NextPage<PageProps> = ({ exchanges }) => {
  return (
    <>
      <ExchangesStyled.PageLayout>
        <Box column flex="1" data-testid="exchanges-welcome-box">
          <Heading>Welcome!</Heading>
          <p>
            Here is the list of <strong>Top 10</strong> Cryptocurrency
            exchanges. Click on any row to display the details!
          </p>
        </Box>
        <Box border="0" padding="0" flex="2">
          <ExchangesTable exchanges={exchanges} />
        </Box>
      </ExchangesStyled.PageLayout>
    </>
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
