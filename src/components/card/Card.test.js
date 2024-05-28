import { render, screen } from '@testing-library/svelte'
import Card from './Card.svelte';
import { describe, test, expect } from 'vitest';

describe('Card component', () => {
  const defaultOptions = {
    testId: 'card',

    componentOptions: {
      data: {
        id: 1,
        uid: '1',
        title: 'Goodbye Treat',
        pretitle: 'Casanare, Colombia',
        description: 'Typica',
        label: 'SHARP',
        image: 'https://loremflickr.com/cache/resized/7914_47370393692_101cbd5418_c_500_500_nofilter.jpg',
        tags: [
          'full',
          'coating',
          'marzipan',
        ],
      },
    },
  };

  test('Data passed', () => {
    const options = {...defaultOptions};

    render(Card, {...options.componentOptions});
    expect(screen.getByTestId(options.testId).innerHTML).toBeTruthy();
  });

  test('Data NOT passed', () => {
    const options = {testId: defaultOptions.testId};

    render(Card, {...options.componentOptions});
    expect(screen.getByTestId(options.testId).innerHTML).toBeFalsy();
  });
});
