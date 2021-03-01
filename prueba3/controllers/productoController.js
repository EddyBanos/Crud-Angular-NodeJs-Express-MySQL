const Producto = require('../models/Producto')

exports.crearProducto = async (req,res)=>{
	try{
		let producto;
		//Creando producto
		producto = new Producto(req.body);
		await producto.save();
		res.send(producto);
	}catch(error){
		console.log(error);
	}
}
exports.obtenerProductos = async (req,res) =>{
	try{
		const productos = await Producto.findAll();
		res.json(productos);
	}catch(error){
		console.log(error)
	}
}


exports.actualizarProductos = async (req,res) =>{

	try{
	const { idProducto, color, dimension, capacidad, modelo}  = req.body;

			let producto = await Producto.findByPk(req.params.idProducto);
			if(!producto){
				res.status(404).json({msg: 'Producto not find'})
			}
			console.log(req.body);
			console.log(req.body.color);
			
			producto.color = req.body.color;
			producto.dimension = req.body.dimension;
			producto.capacidad = req.body.capacidad;
			producto.modelo = req.body.modelo;
			producto.stock = req.body.stock;

			await Producto.update({
				color: req.body.color,
				dimension: req.body.dimension,
				capacidad: req.body.capacidad,
				modelo: req.body.modelo,
				stock: req.body.stock
			
		},{
			where:
			{	idProducto: req.params.idProducto}})
			.then(()=>res.json(producto));
		//	res.json(producto);
		//	console.log(producto.color); */
		}catch(error){
			console.log(error)
		}
	}
	
	

exports.deleteProducto = async (req,res) =>{
try{
		let producto = await Producto.findByPk(req.params.idProducto);
		if(!producto){
			res.status(404).json({msg: 'Producto not find'})
		}
		await Producto.destroy({where: {idProducto: req.params.idProducto} });
		res.json({ msg:  'Producto borrado'});

	}	catch(error){
		console.log("El id de params es: " +req.params.idProducto)
		console.log(error);
	}
}

exports.obtenerProducto = async (req,res) =>{
try{
		let producto = await Producto.findByPk(req.params.idProducto);
		if(!producto){
			res.status(404).json({msg: 'Producto not find'})
		}

		res.json(producto);
	}	catch(error){
		console.log(error)
	}
}

