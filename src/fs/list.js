import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const dirPath = path.join(__dirname, 'files');

    try {
        await fs.access(dirPath).catch(() => {
            throw new Error('FS operation failed');
        });

    } catch (error) {
        console.error(error.message);
    }
};;

await list();