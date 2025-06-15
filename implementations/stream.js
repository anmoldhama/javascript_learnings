const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const util = require('util');

const pipe = util.promisify(pipeline);

async function compressFile(inputPath, outputPath) {
  try {
    await pipe(
      fs.createReadStream(inputPath),
      zlib.createGzip(), // transform stream for compression
      fs.createWriteStream(outputPath)
    );
    console.log(`✅ Compression successful: ${outputPath}`);
  } catch (err) {
    console.error('❌ Compression failed:', err);
  }
}

// Example usage:
compressFile('large-file.txt', 'large-file.txt.gz');
