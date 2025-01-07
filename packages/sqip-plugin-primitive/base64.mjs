import fs from 'fs';

// 👇️ if you use CommonJS require()
// const fs = require('fs')

function toBase64(filePath) {
  const img = fs.readFileSync(filePath);

  return Buffer.from(img).toString('base64');
}

const base64String = toBase64('./mountains.jpg');

process.stdout.write(base64String);
