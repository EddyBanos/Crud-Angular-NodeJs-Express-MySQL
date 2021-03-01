import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
	productoForm: FormGroup;
	titulo= "Crear Producto";
	btnText = "Dar de alta";
	id: string| null;

  constructor(private fb:FormBuilder,
  	private router: Router,
  	private toastr: ToastrService,
	private ProductoService: ProductoService,
	private aRouter: ActivatedRoute) 
	  { 
  	this.productoForm = this.fb.group({
  		color:['',Validators.required],
  		dimension:['',Validators.required],
  		capacidad:['',Validators.required],
  		modelo:['',Validators.required],
  		stock:['',Validators.required],
  	})
	  this.id =this.aRouter.snapshot.paramMap.get('idProducto')
  }

  ngOnInit(): void {
	  this.esEditar();
  }

  agregarProducto(){
  	const PRODUCTO: Producto = {
  		color: this.productoForm.get('color')?.value,
  		dimension: this.productoForm.get('dimension')?.value,
  		capacidad: this.productoForm.get('capacidad')?.value,
  		modelo: this.productoForm.get('modelo')?.value,
  		stock: this.productoForm.get('stock')?.value
  	}
  	console.log(PRODUCTO);

	  if(this.id !== null){
		  //edit
		  this.ProductoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
			this.toastr.info('Producto editado correctamente','Producto actualizado');
			this.router.navigate(['/']);
		  },error => {
			console.log(error);
			this.productoForm.reset();
		}
		  )
	  }else{
		  //create

		  this.ProductoService.guardarProducto(PRODUCTO).subscribe(data =>{
			this.toastr.success('Producto agregado correctamente','Producto registrado');
			this.router.navigate(['/']);
		}, error => {
			console.log(error);
			this.productoForm.reset();
		})
	  }
  	
  }
  esEditar(){
	  if(this.id != null){
		  this.titulo = "Editar Producto";
		  this.btnText = "Actualizar";
		  this.ProductoService.obtenerProducto(this.id).subscribe(data=>{
			  this.productoForm.setValue( {
				color:data.color,
				dimension:data.dimension,
				capacidad:data.capacidad,
				modelo:data.modelo,
				stock:data.stock,
			  } )
		  })
	  }
  }
}
