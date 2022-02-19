export abstract class BaseService {
  constructor(private fetcher: typeof fetch, private apiUrl: string) {}

  async findById<T extends unknown>(id: string, resource: string): Promise<T> {
    const response = await this.fetcher(
      new URL(`${resource}/${id}`, this.apiUrl).toString()
    );
    return response.json();
  }

  async findAll<T extends unknown>(
    resource: string,
    searchParams?: Record<string, string>
  ): Promise<T[]> {
    const url = new URL(resource, this.apiUrl);
    if (searchParams) url.search = new URLSearchParams(searchParams).toString();

    const response = await this.fetcher(url.toString());
    return response.json();
  }
}
