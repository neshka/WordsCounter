import { countWords, getFileContent } from "./helpers";

const filePath = "textFile.txt";
export function countWordsInFile(filePath: string) {
  try {
    const text = getFileContent(filePath);
    console.log(countWords(text));
  } catch (err) {
    console.error(err);
  }
}

countWordsInFile(filePath);
