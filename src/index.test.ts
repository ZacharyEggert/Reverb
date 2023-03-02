import { describe, expect, it } from 'vitest';

import ReverbClient from './index';

import dotenv from 'dotenv';
dotenv.config();

export const setupReverbClient = () => {
  if (!process.env.REVERB_TOKEN)
    throw new Error('No API key found in environment variables');
  return new ReverbClient({ apiKey: process.env.REVERB_TOKEN });
};

describe('Environment', () => {
  it('API Key', () => {
    expect(process.env.REVERB_TOKEN).not.toBeUndefined();
  });
});

describe('ReverbClient', () => {
  it('should pass API key into private variable and set the headers appropriately', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({ apiKey: process.env.REVERB_TOKEN });
    expect(client).not.toBeUndefined();
    expect(client.apiKey).toBe(process.env.REVERB_TOKEN);
    expect(client.headers.Authorization).toBe(
      `Bearer ${process.env.REVERB_TOKEN}`,
    );
  });

  it('should set the default base URL if none is provided', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({ apiKey: process.env.REVERB_TOKEN });
    expect(client.baseURL).toBe('https://api.reverb.com/api');
    expect(ReverbClient.defaultBaseURL).toBe('https://api.reverb.com/api');
  });

  it('should set the base URL if one is provided', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({
      apiKey: process.env.REVERB_TOKEN,
      baseURL: 'http://localhost:3000',
    });
    expect(client.baseURL).toBe('http://localhost:3000');
  });

  it('should set the default headers if none are provided', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({ apiKey: process.env.REVERB_TOKEN });
    expect(client.headers['Content-Type']).toBe('application/json');
    expect(client.headers['Accept-Version']).toBe('3.0');
    expect(ReverbClient.defaultHeaders['Content-Type']).toBe(
      'application/json',
    );
    expect(ReverbClient.defaultHeaders['Accept-Version']).toBe('3.0');
  });

  it('should set the headers if some are provided', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({
      apiKey: process.env.REVERB_TOKEN,
      headers: {
        'X-Test': 'Test',
      },
    });
    expect(client.headers['Content-Type']).toBe('application/json');
    expect(client.headers['Accept-Version']).toBe('3.0');
    expect(client.headers['X-Test']).toBe('Test');
  });

  it('should set the headers if all are provided', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({
      apiKey: process.env.REVERB_TOKEN,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Version': '3.0',
        'X-Test': 'Test',
      },
    });
    expect(client.headers['Content-Type']).toBe('application/json');
    expect(client.headers['Accept-Version']).toBe('3.0');
    expect(client.headers['X-Test']).toBe('Test');
  });

  it('should set the headers if all are provided and override the defaults', () => {
    if (!process.env.REVERB_TOKEN)
      throw new Error('No API key found in environment variables');
    const client = new ReverbClient({
      apiKey: process.env.REVERB_TOKEN,
      headers: {
        'Content-Type': 'application/xml',
        'Accept-Version': '2.0',
        'X-Test': 'Test',
      },
    });
    expect(client.headers['Content-Type']).toBe('application/xml');
    expect(client.headers['Accept-Version']).toBe('2.0');
    expect(client.headers['X-Test']).toBe('Test');
  });
});
