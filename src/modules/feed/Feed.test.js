import { cardAdapter } from './Feed.ts';
import { describe, test, expect } from 'vitest';
import { Config } from '../../config';

describe('Feed module', () => {
  test('Card adapter works correctly', () => {
    const options = {
      response: {
        id: 2840,
        uid: '0f6aebab-6cfd-40a0-8258-30afd849f0b2',
        blend_name: 'Reg`s Enlightenment',
        origin: 'Jinotega, Nicaragua',
        variety: 'Agaro',
        notes: 'crisp, watery, honeydew, green pepper, hops',
        intensifier: 'dry',
      },

      result: {
        id: 2840,
        uid: '0f6aebab-6cfd-40a0-8258-30afd849f0b2',
        title: 'Reg`s Enlightenment',
        pretitle: 'Jinotega, Nicaragua',
        description: 'Agaro',
        image: Config.image,
        label: 'dry',
        tags: [
          'crisp',
          'watery',
          'honeydew',
          'green pepper',
          'hops',
        ],
      },
    }

    expect(cardAdapter(options.response)).toEqual(options.result);
  });
});
