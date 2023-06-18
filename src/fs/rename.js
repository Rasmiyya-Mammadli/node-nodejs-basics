import { promises as fsPromises } from 'fs';

const renameFile = async () => {
  try {
    await fsPromises.access('./src/fs/files/wrongFilename.txt');
    await fsPromises.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
    console.log("The file name was changed!");
  } catch (error) {
    console.error('FS operation failed');
  }
};

await renameFile();
