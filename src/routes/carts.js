const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/carts');

// Ruta para crear un nuevo carrito
router.post('/', cartsController.create);

// Ruta para obtener los productos de un carrito por id
router.get('/:cid', cartsController.getProductsById);

// Ruta para agregar un producto a un carrito por id
router.post('/:cid/product/:pid', cartsController.addProduct);

module.exports = router;
