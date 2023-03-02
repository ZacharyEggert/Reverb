let response: ReverbApiResponse = {
  _links: {
    accounts: {
      href: 'https://api.reverb.com/api/accounts',
    },
    articles: {
      href: 'https://api.reverb.com/api/articles',
    },
    countries: {
      href: 'https://api.reverb.com/api/countries',
    },
    featured_articles: {
      href: 'https://api.reverb.com/api/articles/featured',
    },
    auth_email: {
      href: 'https://api.reverb.com/api/auth/email',
    },
    auth_facebook: {
      href: 'https://api.reverb.com/api/auth/facebook',
    },
    auth: {
      forgot_password: {
        href: 'https://api.reverb.com/api/auth/forgot_password',
      },
      logout: {
        href: 'https://api.reverb.com/api/auth/logout',
      },
    },
    autocomplete: {
      href: 'https://api.reverb.com/api/autocomplete',
    },
    autosuggest: {
      href: 'https://api.reverb.com/api/autosuggest',
    },
    braintree: {
      client_token: {
        href: 'https://api.reverb.com/api/braintree/client_token',
      },
    },
    cart: {
      href: 'https://api.reverb.com/api/cart',
    },
    collections: {
      href: 'https://api.reverb.com/api/collections',
    },
    categories: {
      href: 'https://api.reverb.com/api/categories',
    },
    categories_flat: {
      href: 'https://api.reverb.com/api/categories/flat',
    },
    currencies: {
      display: {
        href: 'https://api.reverb.com/api/currencies/display',
      },
      listing: {
        href: 'https://api.reverb.com/api/currencies/listing',
      },
    },
    listings: {
      href: 'https://api.reverb.com/api/listings',
    },
    payment_methods: {
      href: 'https://api.reverb.com/api/payment_methods',
    },
    price_guides: {
      href: 'https://api.reverb.com/api/priceguide',
    },
    my: {
      requires_login: true,
      account: {
        href: 'https://api.reverb.com/api/my/account',
      },
      addresses: {
        href: 'https://api.reverb.com/api/my/addresses',
      },
      credit_cards: {
        href: 'https://api.reverb.com/api/my/credit_cards',
      },
      counts: {
        href: 'https://api.reverb.com/api/my/counts',
      },
      feed: {
        href: 'https://api.reverb.com/api/my/feed',
      },
      feedback: {
        sent: {
          href: 'https://api.reverb.com/api/my/feedback/sent',
        },
        received: {
          href: 'https://api.reverb.com/api/my/feedback/received',
        },
      },
      follows: {
        href: 'https://api.reverb.com/api/my/follows',
      },
      conversations: {
        href: 'https://api.reverb.com/api/my/conversations',
      },
      recently_viewed: {
        href: 'https://api.reverb.com/api/my/viewed_listings',
      },
      lists: {
        href: 'https://api.reverb.com/api/my/lists',
      },
      listings: {
        href: 'https://api.reverb.com/api/my/listings',
      },
      drafts: {
        href: 'https://api.reverb.com/api/my/listings/drafts',
      },
      negotiations: {
        buying: {
          href: 'https://api.reverb.com/api/my/negotiations/buying',
        },
        selling: {
          href: 'https://api.reverb.com/api/my/listings/negotiations',
        },
      },
      messages: {
        web: {
          href: 'https://reverb.com/my/messages',
        },
      },
      orders: {
        buying: {
          all: {
            href: 'https://api.reverb.com/api/my/orders/buying/all',
          },
          unpaid: {
            href: 'https://api.reverb.com/api/my/orders/buying/unpaid',
          },
        },
        selling: {
          all: {
            href: 'https://api.reverb.com/api/my/orders/selling/all',
          },
          unpaid: {
            href: 'https://api.reverb.com/api/my/orders/selling/unpaid',
          },
          awaiting_shipment: {
            href: 'https://api.reverb.com/api/my/orders/selling/awaiting_shipment',
          },
        },
        awaiting_feedback: {
          href: 'https://api.reverb.com/api/my/orders/awaiting_feedback',
        },
      },
    },
    shop: {
      href: 'https://api.reverb.com/api/shop',
      payment_methods: {
        href: 'https://api.reverb.com/api/shop/payment_methods',
      },
      listing_conditions: {
        href: 'https://api.reverb.com/api/shop/listing_conditions',
      },
    },
    terms_and_conditions: {
      web: {
        href: 'https://reverb.com/page/terms',
      },
    },
    wants: {
      requires_login: true,
      href: 'https://api.reverb.com/api/wants',
    },
    push_notifications: {
      registrations: {
        href: 'https://api.reverb.com/api/push_notifications/registrations',
      },
    },
    shipping: {
      regions: {
        href: 'https://api.reverb.com/api/shipping/regions',
      },
      providers: {
        href: 'https://api.reverb.com/api/shipping/providers',
      },
    },
  },
};

export type ReverbApiResponse<T = {}> = T & {
  _links: ReverbApiLinks | ReverbApiLinksSecured;
};

export type ReverbApiLinks = {
  [key: string]: ReverbApiLink | ReverbApiLinks | ReverbApiLinksSecured;
};

export type ReverbApiLinksSecured = {
  requires_login: true;
} & {
  [key: string]:
    | ReverbApiLink
    | ReverbApiLinksSecured
    | boolean
    | ReverbApiLinks;
};

export type ReverbApiLink = {
  href: string;
  requires_login?: boolean;
};

export type ReverbApiResponseWithPagination<T = {}> = ReverbApiResponse<T> & {
  total: number;
  current_page: number;
  total_pages: number;
  _links: ReverbApiLinks & {
    next: ReverbApiLink;
    prev: ReverbApiLink;
  };
};

export type ReverbClientOptions = {
  apiKey: string;
  baseURL?: string;
  headers?: Record<string, string>;
};

type pathSection = `/${string}`;

type path3 =
  | pathSection
  | `${pathSection}${pathSection}`
  | `${pathSection}${pathSection}${pathSection}`;

export type ReverbApiPath = path3 | `${path3}${path3}`;

const Path: ReverbApiPath = '/';
