//rutas para producto

const express = require('express');
const router =express.Router();
const productoController = require('../controllers/productoController');

//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.post('/:idProducto', productoController.actualizarProductos);
router.get('/:idProducto', productoController.obtenerProducto);
router.delete('/:idProducto', productoController.deleteProducto);



module.exports = router; 