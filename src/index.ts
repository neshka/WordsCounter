import * as fs from 'fs';

const fileContent = fs.readFileSync('textFiles/helloWorld.txt', 'utf-8');
export const words = fileContent.split(/\W+/);