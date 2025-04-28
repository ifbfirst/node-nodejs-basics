import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.access(filePath).then(() => {
            throw new Error('FS operation failed');
        }).catch(() => {});

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, 'I am fresh and young');
    } catch (error) {
        console.error(error.message);
    }
};

create();
