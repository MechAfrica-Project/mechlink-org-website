const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, '../../assets/Backcode Logomark-01.png');
const outputPath = path.resolve(__dirname, '../public/backcode-logomark.svg');

// Ensure public directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

potrace.trace(inputPath, {
    color: '#000000',
    threshold: 120
}, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync(outputPath, svg);
  console.log('SVG successfully generated at:', outputPath);
});
