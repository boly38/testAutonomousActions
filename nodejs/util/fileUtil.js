import { readFile } from 'node:fs/promises';

export const readUTF8File = async filename => readFile(filename, 'utf8');