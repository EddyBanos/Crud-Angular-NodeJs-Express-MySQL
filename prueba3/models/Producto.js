const mysql = require('mysql');
const mysql2 = require('mysql2');
const Sequelize =require('sequelize');

const sequelize = new Sequelize('tazas', 'root', 'admin1234', {
  host: 'localhost',
  dialect: 'mysql',
});

const ProductoSchema= sequelize.define('producto',{
	idProducto: {
		type: Sequelize.INTEGER, 
		primaryKey: true,
		required: true
	},
	color: {
		type: Sequelize.STRING,
		required: true,
		plain: true
	},
	dimension: {
		type: Sequelize.STRING,
		required: true,
		plain: true
	},
	capacidad: {
		type: Sequelize.INTEGER,
		required: true,
		plain: true
	},
	modelo:{
		type: Sequelize.STRING,
		required: true,
		plain: true
	},
	stock:{
		type: Sequelize.INTEGER,
		required: true,
		plain: true
	}
},
{	freezeTableName: true,
	timestamps: false
});

module.exports = ProductoSchema;