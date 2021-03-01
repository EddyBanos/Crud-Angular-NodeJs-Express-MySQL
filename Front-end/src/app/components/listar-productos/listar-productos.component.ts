import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProducto: Producto[] = [];
  constructor(private _productoService: ProductoService, 
    private toastr: ToastrService) { }
    
  ngOnInit(): void {
    this.obtenerProducto();
  }
  obtenerProducto(){
  this._productoService.getProductos().subscribe(data =>{
    console.log(data);
    this.listProducto = data;

  }, error =>{
    console.log(error);
  })
  
  }eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('Producto eliminado con exito', 'Producto eliminado');
      this.obtenerProducto();
    }, error => {
      console.log(error);
    })
  }
}
