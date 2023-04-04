import fs from 'fs';

//read a file and return its content
export function getFileContent(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

//counts unique word
export function countWords(text: string): { [key: string]: number } {
    const words = text
        .toLowerCase()
        .split(/\W+/)
        .filter((word) => word.length > 0);
    const wordCount: { [key: string]: number } = {};
    for (const word of words) {
        const count = wordCount[word] ?? 0;
        wordCount[word] = count + 1;
    }
    return wordCount;
}
