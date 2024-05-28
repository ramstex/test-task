import { render, screen } from '@testing-library/svelte'
import LoadMore from './LoadMore.svelte';
import { describe, test, expect } from 'vitest';

describe('LoadMore component', () => {
  test('Not loading state', () => {
    const options = {
      text: '+',
    };

    render(LoadMore);
    screen.getByText(options.text);
  });

  test('Loading state', () => {
    const options = {
      componentOptions: {
        loading: true,
      },
      testId: 'spinner',
    };

    render(LoadMore, { ...options.componentOptions });
    expect(screen.getByTestId(options.testId)).toBeTruthy();
  });
});
