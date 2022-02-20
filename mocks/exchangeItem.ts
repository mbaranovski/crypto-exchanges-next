import { Exchange } from "../services/CoinGeckoService/CoinGeckoService.types";

export const mockedSingleExchange: Exchange = {
  name: "Binance",
  year_established: 2017,
  country: "Cayman Islands",
  description: "This is description",
  url: "https://www.binance.com/",
  image:
    "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
  facebook_url: "https://www.facebook.com/binanceexchange",
  reddit_url: "https://www.reddit.com/r/binance/",
  telegram_url: "",
  slack_url: "",
  other_url_1: "https://medium.com/binanceexchange",
  other_url_2: "https://steemit.com/@binanceexchange",
  twitter_handle: "binance",
  has_trading_incentive: false,
  centralized: true,
  public_notice: "",
  alert_notice: "",
  trust_score: 10,
  trust_score_rank: 1,
  trade_volume_24h_btc: 288945.52175284026,
  trade_volume_24h_btc_normalized: 288945.52175284026,
  tickers: [],
  status_updates: [],
};
