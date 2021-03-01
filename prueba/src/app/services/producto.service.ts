import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3000/api/producto/';
  urlV = 'http://localhost:3000/api/venta/';
  
  constructor(private http: HttpClient) {   } 
  
  getProductos(): Observable<any> {
    return this.http.get(this.url);
    //console.log(Observable);
    }
    eliminarProducto(id: String): Observable<any>{
      return this.http.delete(this.url + id);
    }
    guardarProducto(producto: Producto): Observable<any>{
      return this.http.post(this.url,producto);
    }
    obtenerProducto(id: String): Observable<any>{
      return this.http.get(this.url + id);
    }
    editarProducto(id: String, producto: Producto): Observable<any>{
      return this.http.post(this.url + id, producto);
    }

}
