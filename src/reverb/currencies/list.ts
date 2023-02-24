export type ReverbCurrencyListing = (typeof ReverbCurrencyListing)[number];

export const ReverbCurrencyListing = [
  'USD',
  'CAD',
  'EUR',
  'GBP',
  'AUD',
  'JPY',
  'NZD',
  'MXN',
] as const;

export type ReverbCurrencyDisplay = (typeof ReverbCurrencyDisplay)[number];

export const ReverbCurrencyDisplay = [
  'USD',
  'CAD',
  'EUR',
  'GBP',
  'AUD',
  'JPY',
  'NZD',
  'MXN',
  'DKK',
  'SEK',
  'CHF',
  'ARS',
  'BRL',
  'HKD',
  'NOK',
  'PHP',
  'PLN',
] as const;
