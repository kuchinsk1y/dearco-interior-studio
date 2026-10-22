/**
 * Converts the original images from `design-source/images` to optimised WebP files
 * in `src/assets/images`. Run with `npm run images`.
 *
 * Widths are roughly 2x the size the picture is shown at, so retina screens stay sharp.
 */
import { mkdir, readdir } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = 'design-source/images'
const OUTPUT_DIR = 'src/assets/images'
const QUALITY = 78

const DEFAULT_WIDTH = 2400

/** Max output width per file (without extension). */
const MAX_WIDTH = {
  'hero-interior': 2400,
  'video-banner': 2400,
  'insights-bathroom': 2400,
  'dedicated-living-1': 900,
  'dedicated-living-2': 900,
  'post-feng-shui': 1200,
  'gallery-design': 1000,
  'gallery-featured': 1000,
  'gallery-planning': 1000,
  'gallery-interior': 1000,
  'product-1': 700,
  'product-2': 700,
  'product-3': 700,
  'product-4': 700,
  'product-5': 700,
  'product-6': 700,
  'client-1': 400,
  'client-2': 400,
  'client-3': 400,
}

await mkdir(OUTPUT_DIR, { recursive: true })

const files = (await readdir(SOURCE_DIR)).filter((file) => /\.(jpe?g|png)$/i.test(file))

for (const file of files) {
  const name = basename(file, extname(file))
  const output = join(OUTPUT_DIR, `${name}.webp`)

  const info = await sharp(join(SOURCE_DIR, file))
    .resize({ width: MAX_WIDTH[name] ?? DEFAULT_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output)

  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}
