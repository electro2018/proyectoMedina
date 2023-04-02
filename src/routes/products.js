const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '..', 'data', 'productos.json');

function readProductsFile() {
  const data = fs.readFileSync(PRODUCTS_FILE);
  return JSON.parse(data);
}

function writeProductsFile(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(PRODUCTS_FILE, jsonData);
}

function generateProductId() {
  const products = readProductsFile();
  const ids = products.map((p) => p.id);
  const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
}