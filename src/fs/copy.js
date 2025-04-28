import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const startDir = path.join(__dirname, 'files');
    const finishDir = path.join(__dirname, 'files_copy');

    try {
        await fs.access(startDir).catch(() => {
            throw new Error('FS operation failed');
        });

        await fs.access(finishDir).then(() => {
            throw new Error('FS operation failed');
        }).catch(() => {});
        await fs.mkdir(finishDir, { recursive: true });

  
        const files = await fs.readdir(startDir);


        await Promise.all(files.map(async (file) => {
            const srcFile = path.join(startDir, file);
            const destFile = path.join(finishDir, file);
            await fs.copyFile(srcFile, destFile);
        }));
    } catch (error) {
        console.error(error.message);
    }
};

await copy();
