// Builds the social share image (1200x630) from the current portrait asset.
//
// Portrait pipeline note:
//   pic1.jpeg + pic.png are the ORIGINAL cutout pair from the previous profile.
//   They are NOT the current portrait, so they are never used to overwrite
//   public/assets/portrait-*.webp (which are the correct, current assets).
//   To regenerate the portraits, drop the new high-res photo + alpha cutout in
//   as `source/photo.jpg` and `source/cutout.png` and run `node scripts/build-images.mjs --portrait`.
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const rebuildPortraits = process.argv.includes('--portrait');

if (rebuildPortraits) {
  const SRC = 'source';
  if (!existsSync(`${SRC}/photo.jpg`) || !existsSync(`${SRC}/cutout.png`)) {
    console.error('Missing source/photo.jpg or source/cutout.png — aborting portrait rebuild.');
    process.exit(1);
  }

  const hi = sharp(`${SRC}/photo.jpg`);
  const { width, height } = await hi.metadata();

  const alpha = await sharp(`${SRC}/cutout.png`)
    .ensureAlpha()
    .extractChannel('alpha')
    .resize(width, height, { kernel: 'lanczos3' })
    .blur(0.8)
    .raw()
    .toBuffer();

  const rgb = await sharp(`${SRC}/photo.jpg`).removeAlpha().raw().toBuffer();
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = rgb[i * 3];
    rgba[i * 4 + 1] = rgb[i * 3 + 1];
    rgba[i * 4 + 2] = rgb[i * 3 + 2];
    rgba[i * 4 + 3] = alpha[i];
  }
  const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

  for (const w of [1100, 720, 420]) {
    await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
  }
  console.log('portraits built');
}

// Social share image (1200x630) on a dark backdrop, built from the current portrait.
const portrait = await sharp(`${OUT}/portrait-1100.webp`).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="188" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="20" fill="#ff3d5a" letter-spacing="12">R SERIES</text>
        <rect x="72" y="210" width="608" height="3" fill="#e5132b"/>
        <text x="72" y="330" font-family="Impact, 'Arial Narrow', sans-serif" font-size="122" fill="#f4f1ec" letter-spacing="4">RABINDRA</text>
        <text x="78" y="382" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE AI ENGINEER</text>
        <text x="78" y="440" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">AI/ML ENGINEER • GENERATIVE AI • LLMs &amp; RAG</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
