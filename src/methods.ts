import axios from 'axios';

import { ReverbClientOptions } from './types';

export const getMyListingsPage = async ({
  page,
  limit,
  headers,
  baseURL,
}: {
  page: number;
  limit?: number;
  headers: ReverbClientOptions['headers'];
  baseURL: ReverbClientOptions['baseURL'];
}) => {
  const response = await axios.get(`${baseURL}/my/listings`, {
    headers,
  });
  return response.data;
};

export const get = async ({
  path = '',
  headers,
  baseURL,
}: {
  path: string;
  headers: ReverbClientOptions['headers'];
  baseURL: ReverbClientOptions['baseURL'];
}) => {
  const response = await axios.get(`${baseURL}${path}`, {
    headers,
  });
  return response.data;
};
