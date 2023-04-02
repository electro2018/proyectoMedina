const express = require('express')
const { userRouter } = require('./routes/users.router')
const productsRouter = require('./routes/products')
const cartsRouter = require('./routes/carts')

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products',useRouter)
app.use('/api/carts',useRouter)


app.listen(PORT ,(err)=> {
    if(err)return console.log("Error al iniciar el sevidor")
    console.log("servidor iniciado en el purto${PORT}")
})





const readDataFromFile = (filePath) => {
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData);
  return data;
};

const writeDataToFile = (filePath, data) => {
  const rawData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, rawData);
};


const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};


const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  const products = readDataFromFile(PRODUCTS_DB_PATH);
  const limit = req.query.limit || products.length;
  const result = products.slice(0, limit);
  res.json(result);
});

productsRouter.get('/:pid', (req, res) => {
  const products = readDataFromFile(PRODUCTS_DB_PATH);
  const product = products.find((p) => p.id == req.params.pid);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

productsRouter.post('/', (req, res) => {
  const products = readDataFromFile(PRODUCTS_DB_PATH);
  const newProduct = {
    id: generateId(),
    title: req.body.title,
    description: req.body.description,
    code: req.body.code,
    price: req.body.price,
    status: req.body.status || true,
    stock: req.body.stock,
    category: req.body.category,
    thumbnails: req.body.thumbnails || [],
  };
  products.push(newProduct);
  writeDataToFile(PRODUCTS_DB_PATH, products);
  res.status(201).json(newProduct);
});

productsRouter.put('/:pid', (req, res) => {
  const products = readDataFromFile(PRODUCTS_DB_PATH);
  const index = products.findIndex((p) => p.id == req.params.pid);
  if (index !== -1) {
    const updatedProduct = {
      ...products[index],
      title: req.body.title,
      description: req.body.description,
      code: req.body.code,
      price: req.body.price,
      status: req.body.status,
      stock: req.body.stock,
      category: req.body.category,
      thumbnails: req.body.thumbnails || products[index].thumbnails,
    };
    products[index] = updatedProduct;
    writeDataToFile(PRODUCTS_DB_PATH, products);
    res.json(updatedProduct);
  } else {
    res.status(404).send('Product not found');
  }
});

productsRouter.delete('/:pid', (req, res) => {
  const products = readDataFromFile(PRODUCTS_DB_PATH);
  const index = products.findIndex((p) => p.id == req.params.pid);

});