import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const dirPath = path.join(__dirname, 'files'); 
    const filePath = path.join(dirPath, 'fresh.txt');

    try {
        await fs.mkdir(dirPath, { recursive: true });
        try {
            await fs.stat(filePath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') throw error; 
        }


        await fs.writeFile(filePath, 'I am fresh and young');
    } catch (error) {
        console.error(error.message);
    }
};
create();
