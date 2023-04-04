import { describe, expect, test } from '@jest/globals';
import { words } from '../src/index';

describe('word count', () => {
  test('prints the output into the console', () => {
    const expected = ["Hello", "World"];

    expect(words).toEqual(expected);
  });
});

