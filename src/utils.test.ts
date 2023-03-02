import { describe, expect, it } from 'vitest';
import { makeURLParams } from './utils';

describe('makeURLParams', () => {
  it('should convert an object into a URLSearchParams string', () => {
    const params = {
      foo: 'bar',
      baz: 123,
    };

    const URLParams = makeURLParams(params);

    expect(URLParams).toBe('foo=bar&baz=123');
  });
});
