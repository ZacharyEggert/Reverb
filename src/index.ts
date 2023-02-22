type ReverbClientOptions = {
  apiKey: string;
  baseURL?: string;
  headers?: Record<string, string>;
};

export default class ReverbApiClient {
  private _apiKey: string;
  private _baseURL: string;
  private _headers: Record<string, string>;

  static defaultBaseURL = 'https://api.reverb.com/api' as const;
  static getDefaultBaseURL = () => ReverbApiClient.defaultBaseURL;
  static defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept-Version': '3.0',
  } as const;
  static getDefaultHeaders = (apiKey: string) =>
    ({
      ...ReverbApiClient.defaultHeaders,
      Authorization: `Bearer ${apiKey}`,
    } as const);

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
}
