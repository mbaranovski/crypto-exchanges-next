import { BaseService } from "../BaseService";
import { Exchange, ExchangeListItem } from "./CoinGeckoService.types";

export class CoinGeckoService extends BaseService {
  constructor(fetcher: typeof fetch) {
    super(fetcher, "https://api.coingecko.com/api/v3");
  }
  exchanges(searchParams?: { per_page: string; page: string }) {
    return this.findAll<ExchangeListItem>("/exchanges", searchParams).catch(
      (e) => {
        console.log(e);
        return [];
      }
    );
  }

  exchange(id: string) {
    return this.findById<Exchange>(id, "/exchanges");
  }
}
