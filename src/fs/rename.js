import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const oldFilePath = path.join(__dirname, 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'properFilename.md');

    try {
        await fs.access(oldFilePath).catch(() => {
            throw new Error('FS operation failed');
        });

        await fs.access(newFilePath).then(() => {
            throw new Error('FS operation failed');
        }).catch(() => {});

        await fs.rename(oldFilePath, newFilePath);
    } catch (error) {
        console.error(error.message);
    }
};

await rename();