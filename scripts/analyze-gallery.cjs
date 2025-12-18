const sharp = require("sharp");
const fs = require("node:fs/promises");
const path = require("node:path");
const quantize = require("quantize");

function rgbToHex(r, g, b) {
  return `#${[r, g, b]
    .map((value) => Math.round(value).toString(16).padStart(2, "0"))
    .join("")}`;
}

async function analyzeImage(filePath) {
  const stats = await sharp(filePath).stats();
  const avgBuffer = await sharp(filePath)
    .resize(1, 1, { fit: "cover" })
    .removeAlpha()
    .raw()
    .toBuffer();

  const [r, g, b] = avgBuffer;
  const averageHex = rgbToHex(r, g, b);

  const { dominant } = stats;
  const dominantHex = rgbToHex(dominant.r, dominant.g, dominant.b);

  const { data } = await sharp(filePath)
    .resize(80, 80, { fit: "cover" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = [];
  for (let i = 0; i < data.length; i += 3) {
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  const palette = quantize(pixels, 5);
  const paletteHex = palette
    ? palette
        .palette()
        .map(([pr, pg, pb]) => rgbToHex(pr, pg, pb))
    : [];

  return {
    averageHex,
    dominantHex,
    paletteHex,
  };
}

async function analyzeGallery() {
  const galleryDir = path.resolve("public/images/gallery");
  const files = (await fs.readdir(galleryDir)).filter((file) =>
    /\.(jpe?g|png)$/i.test(file)
  );

  const results = [];

  for (const file of files) {
    const filePath = path.join(galleryDir, file);
    try {
  const { averageHex, dominantHex, paletteHex } = await analyzeImage(filePath);
  results.push({ file, averageHex, dominantHex, paletteHex });
    } catch (error) {
      console.error(`Failed to analyze ${file}:`, error.message);
    }
  }

  results.sort((a, b) => a.file.localeCompare(b.file));
  console.log(JSON.stringify(results, null, 2));
}

analyzeGallery().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
