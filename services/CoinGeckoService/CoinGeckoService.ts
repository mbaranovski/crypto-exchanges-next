import { BaseService } from "../BaseService";
import { Exchange, ExchangeListItem } from "./CoinGeckoService.types";

type ErrorResponse = { error: string };

const hasReturnedError = (response: any): response is ErrorResponse => {
  return !!response.error;
};

export class CoinGeckoService extends BaseService {
  constructor(fetcher: typeof fetch) {
    super(fetcher, "https://api.coingecko.com/api/v3");
  }
  exchanges(searchParams?: { per_page: string; page: string }) {
    return this.findAll<ExchangeListItem>("/exchanges", searchParams).catch(
      (e) => {
        console.error(e);
        return [];
      }
    );
  }

  async exchange(id: string) {
    const data = await this.findById<Exchange | null>(id, "/exchanges");

    if (hasReturnedError(data)) {
      console.error(data.error);
      return null;
    }

    return data;
  }
}
