javascriptconst fs = require('fs');
const key = process.env.ANTHROPIC_API_KEY || '';
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('REPLACE_API_KEY', key);
fs.writeFileSync('index.html', html);
console.log('API key injected successfully');
