import { BaseService } from "../BaseService";
import { Exchange, ExchangeListItem } from "./CoinGeckoService.types";

export class CoinGeckoService extends BaseService {
  exchanges(searchParams?: Record<string, string>) {
    return this.findAll<ExchangeListItem>("/exchanges", searchParams);
  }

  exchange(id: string) {
    return this.findById<Exchange>(id, "/exchanges");
  }
}
