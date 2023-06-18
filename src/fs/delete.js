import { promises as fsPromises } from 'fs';

const remove = async () => {
  try {
    await fsPromises.access('./src/fs/files/fileToRemove.txt');
    await fsPromises.unlink('./src/fs/files/fileToRemove.txt');
    console.log('The file was removed!');
  } catch (error) {
    console.error('FS operation failed');
  }
};

await remove();
