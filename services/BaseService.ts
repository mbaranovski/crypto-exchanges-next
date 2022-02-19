export abstract class BaseService {
  constructor(private fetcher: typeof fetch, private apiUrl: string) {}

  protected async findById<T extends unknown>(
    id: string,
    resource: string
  ): Promise<T> {
    const response = await this.fetcher(
      new URL(`${this.apiUrl}${resource}/${id}`).toString()
    );
    return response.json();
  }

  protected async findAll<T extends unknown>(
    resource: string,
    searchParams?: Record<string, string>
  ): Promise<T[]> {
    const url = new URL(`${this.apiUrl}${resource}`);
    if (searchParams) url.search = new URLSearchParams(searchParams).toString();
    const response = await this.fetcher(url.toString());
    return response.json();
  }
}
