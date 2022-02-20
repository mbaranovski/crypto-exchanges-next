import * as td from "testdouble";
import { CoinGeckoService } from "../CoinGeckoService";
import { Exchange, ExchangeListItem } from "../CoinGeckoService.types";

const mockedExchanges: ExchangeListItem[] = [
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

const mockedSingleExchange: Exchange = {
  name: "Binance",
  year_established: 2017,
  country: "Cayman Islands",
  description: "",
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

describe("CoinGeckoService", () => {
  const fetcherMock = td.func<typeof fetch>();
  const apiUrl = "https://api.coingecko.com/api/v3";

  test("exchanges method returns list of exchanges from the coinbase api", async () => {
    const coinGeckoService = new CoinGeckoService(fetcherMock);
    const mockSearchParams = {
      per_page: "10",
      page: "1",
    };

    td.when(
      fetcherMock(
        `${apiUrl}/exchanges?${new URLSearchParams(
          mockSearchParams
        ).toString()}`
      )
    ).thenResolve({
      json: async () => mockedExchanges,
    });

    const exchanges = await coinGeckoService.exchanges({
      per_page: "10",
      page: "1",
    });

    expect(exchanges).toEqual(mockedExchanges);
  });

  test("exchanges method returns empty list in case of error during fetching", async () => {
    const coinGeckoService = new CoinGeckoService(fetcherMock);

    td.when(fetcherMock(`${apiUrl}/exchanges`)).thenReject(
      new Error("error while fetching")
    );

    const exchanges = await coinGeckoService.exchanges();

    expect(exchanges).toEqual([]);
  });

  test("exchange method returns single exchange object if found", async () => {
    const coinGeckoService = new CoinGeckoService(fetcherMock);

    td.when(fetcherMock(`${apiUrl}/exchanges/binance`)).thenResolve({
      json: async () => mockedSingleExchange,
      status: 200,
    });

    const exchanges = await coinGeckoService.exchange("binance");

    expect(exchanges).toEqual(mockedSingleExchange);
  });

  test("exchange method returns null if entity not found", async () => {
    const coinGeckoService = new CoinGeckoService(fetcherMock);

    td.when(fetcherMock(`${apiUrl}/exchanges/not-existing`)).thenResolve({
      json: async () => ({
        error: "resource not found",
      }),
      status: 404,
    });

    const exchanges = await coinGeckoService.exchange("not-existing");

    expect(exchanges).toEqual(null);
  });

  test("exchange method returns null if in case of error during fetching", async () => {
    const coinGeckoService = new CoinGeckoService(fetcherMock);

    td.when(fetcherMock(`${apiUrl}/exchanges/with-error`)).thenReject(
      new Error("error while fetching")
    );

    const exchanges = await coinGeckoService.exchange("with-error");

    expect(exchanges).toEqual(null);
  });
});
