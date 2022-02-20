import * as td from "testdouble";
import { mockedSingleExchange } from "../../../mocks/exchangeItem";
import { mockedExchanges } from "../../../mocks/exchangesList";
import { CoinGeckoService } from "../CoinGeckoService";

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
