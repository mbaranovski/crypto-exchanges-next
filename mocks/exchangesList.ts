import { ExchangeListItem } from "../services/CoinGeckoService/CoinGeckoService.types";

export const mockedExchanges: ExchangeListItem[] = [
  {
    id: "binance",
    name: "Binance",
    year_established: 2017,
    country: "Cayman Islands",
    description: "",
    url: "https://www.binance.com/",
    image:
      "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 1,
    trade_volume_24h_btc: 285675.831260751,
    trade_volume_24h_btc_normalized: 285675.831260751,
  },
];
