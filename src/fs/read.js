import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, 'fileToRead.txt');

    try {
        await fs.access(filePath).catch(() => {
            throw new Error('FS operation failed');
        });

    } catch (error) {
        console.error(error.message);
    }
};

await read();