import { describe, expect, it } from 'vitest';
import { setupReverbClient } from './index.test';

describe(
  'getMyListings',
  () => {
    const client = setupReverbClient();

    it(
      'should return an object',
      () =>
        new Promise((done) => {
          client
            .getMyListingsPage({ page: 1, limit: 10 })
            .then((listings) => {
              expect(listings).not.toBeUndefined();
              expect(listings).toBeInstanceOf(Object);
              done(null);
            })
            .catch((err) => {
              done(err);
            });
        }),
      10000,
    );
  },
  { timeout: 10000 },
);
