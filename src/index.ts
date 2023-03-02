import { get, getMyListingsPage } from './methods';
import { ReverbClientOptions } from './types';

export default class ReverbApiClient {
  private _apiKey: string;
  private _baseURL: string;
  private _headers: Record<string, string>;

  static defaultBaseURL = 'https://api.reverb.com/api';
  static getDefaultBaseURL = () => ReverbApiClient.defaultBaseURL;
  static defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept-Version': '3.0',
  };
  static getDefaultHeaders = (apiKey: string) => ({
    ...ReverbApiClient.defaultHeaders,
    Authorization: `Bearer ${apiKey}`,
  });

  constructor({ apiKey, baseURL, headers }: ReverbClientOptions) {
    this._apiKey = apiKey;
    this._baseURL = baseURL || ReverbApiClient.getDefaultBaseURL();
    this._headers = {
      ...ReverbApiClient.getDefaultHeaders(apiKey),
      ...headers,
    };
  }

  get apiKey() {
    return this._apiKey;
  }

  get baseURL() {
    return this._baseURL;
  }

  get headers() {
    return this._headers;
  }

  get = async ({ path }: { path: string }) => {
    if (!path) throw new Error('Path is required');
    return await get({
      baseURL: this.baseURL,
      headers: this.headers,
      path: '',
    });
  };

  getMyListingsPage = async ({
    page = 1,
    limit,
  }: {
    page?: number;
    limit?: number;
  }) => {
    return await getMyListingsPage({
      page,
      limit,
      baseURL: this._baseURL,
      headers: this._headers,
    });
  };
}
