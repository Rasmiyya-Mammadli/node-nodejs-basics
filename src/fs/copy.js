import { promises as fsPromises } from 'fs';

const copy = async () => {
  try {
    await fsPromises.access('./src/fs/files__copy');
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await fsPromises.cp('./src/fs/files', './src/fs/files__copy', { recursive: true });
        console.log('Directory was copied!');
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error('FS operation failed');
    }
  }
};

copy();
