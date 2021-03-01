export class Producto {
	idProducto?: number;
	color: string;
	dimension: string;
	capacidad: number;
	modelo: string;
	stock: number;

	constructor(color: string, dimension: string, capacidad: number, modelo: string, stock: number){
		this.color= color;
		this.dimension=dimension;
		this.capacidad=capacidad;
		this.modelo = modelo;
		this.stock =stock;
	}
}