// @flow

import elasticsearch from 'elasticsearch';
import config from '../config.json';

const client = new elasticsearch.Client({
  host: config.elasticsearch.host,
  requestTimeout: 300000,
});

const PAGE_SIZE = 30;
const getFrom = page => ((page - 1) * PAGE_SIZE);

export const matchAll = (page: number) => client.search({
  index: config.elasticsearch.index,
  type: config.elasticsearch.type,
  size: PAGE_SIZE,
  from: getFrom(page),
  body: {
    query: {
      match_all: {},
    },
  },
});

export const searchByString = (searchString: string, page: number) => client.search({
  index: config.elasticsearch.index,
  type: config.elasticsearch.type,
  size: PAGE_SIZE,
  from: getFrom(page),
  body: {
    query: {
      nested: {
        query: {
          bool: {
            must: [
              { match: { 'fields.value': searchString } },
            ],
          },
        },
        path: 'fields',
      },
    },
  },
});

export const getBuckets = () => client.search({
  index: config.elasticsearch.index,
  type: config.elasticsearch.type,
  size: 200,
  body: {
    aggs: {
      fields: {
        nested: {
          path: 'fields',
        },
        aggs: {
          tag: {
            terms: {
              field: 'fields.tag.raw',
              size: 200,
            },
            aggs: {
              value: {
                terms: {
                  field: 'fields.value.raw',
                  size: 200,
                },
              },
            },
          },
        },
      },
    },
  },
});
