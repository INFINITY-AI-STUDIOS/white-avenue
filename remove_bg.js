import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import sharp from 'sharp';

async function removeImageBackground() {
    const inputPath = 'Images/Captura de pantalla 2026-02-21 a la(s) 9.56.19 p.m..png';
    const outputPath = 'Images/logo_no_bg.png';

    try {
        console.log('Decoding image with sharp...');
        // Decode with sharp
        const { data, info } = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        // The image data object expected by @imgly/background-removal-node
        const imageData = {
            data: new Uint8ClampedArray(data),
            width: info.width,
            height: info.height,
        };

        console.log('Removing background...');
        const resultBlob = await removeBackground(imageData);

        // The result from removeBackground is a Blob, convert to buffer
        const arrayBuffer = await resultBlob.arrayBuffer();
        const resultBuffer = Buffer.from(arrayBuffer);

        console.log('Encoding and saving...');
        // Imgly outputs a raw PNG blob. If there are issues, we could run it back through sharp, but we'll try saving directly first:
        fs.writeFileSync(outputPath, resultBuffer);
        console.log(`Success! Saved to ${outputPath}`);
    } catch (error) {
        console.error('Error removing background:', error);
    }
}

removeImageBackground();
