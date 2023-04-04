import { describe, expect, test } from '@jest/globals';
import { getFileContent, countWords } from '../src/helpers';

describe('getFileContent', () => {
  test('returns file content as a string', () => {
    const filePath = 'tests/testFile.txt';
    const expectedContent = 'Cupcake ipsum dolor sit amet dragée';
    const content = getFileContent(filePath);
    expect(content).toEqual(expectedContent);
  });
});

describe('countWords', () => {
  test('counts unique word in a string', () => {
    const text = 'This is a test file.';
    const expectedWordCount = {
    "a": 1,
    "file": 1,
    "is": 1,
    "test": 1,
    "this": 1 
  };
    const wordCount = countWords(text);
    expect(wordCount).toEqual(expectedWordCount);
  });
});
