import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const filePath = path.join(__dirname, 'fileToRemove.txt');

    try {
        await fs.access(filePath).catch(() => {
            throw new Error('FS operation failed');
        });

        await fs.unlink(filePath);
    } catch (error) {
        console.error(error.message);
    }
};

await remove();