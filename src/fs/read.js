import { promises as fsPromises } from 'fs';

const read = async () => {
  try {
    await fsPromises.access('./src/fs/files/fileToRead.txt');
    const data = await fsPromises.readFile('./src/fs/files/fileToRead.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('FS operation failed');
  }
};

await read();
