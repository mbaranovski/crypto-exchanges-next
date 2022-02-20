import { Exchange, ExchangeListItem } from "./CoinGeckoService.types";

export class CoinGeckoService {
  apiUrl: string = "https://api.coingecko.com/api/v3";
  constructor(private fetcher: typeof fetch) {}

  async exchanges(searchParams?: {
    per_page: string;
    page: string;
  }): Promise<ExchangeListItem[]> {
    try {
      const url = new URL(`${this.apiUrl}/exchanges`);
      if (searchParams)
        url.search = new URLSearchParams(searchParams).toString();

      const response = await this.fetcher(url.toString());
      return response.json();
    } catch (e) {
      return [];
    }
  }

  async exchange(id: string): Promise<Exchange | null> {
    try {
      const response = await this.fetcher(
        new URL(`${this.apiUrl}/exchanges/${id}`).toString()
      );

      const status = response.status;
      const data = await response.json();

      if (status !== 200) {
        console.error(data);
        return null;
      }

      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
