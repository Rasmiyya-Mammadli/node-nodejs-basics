import { promises as fsPromises } from 'fs';

const list = async () => {
  try {
    await fsPromises.access('./src/fs/files');
    const files = await fsPromises.readdir('./src/fs/files');
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await list();
