import { Component } from '@angular/core';
import { Formulario } from "../formulario/formulario";
import { Producto } from '../Modelos/producto';
import { Productos } from '../productos/productos';
import { ProductosService } from '../servicios/productos';

@Component({
  selector: 'app-listado-productos',
  imports: [Formulario, Productos],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  productos: Producto[] = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productoService.productos;
    console.log(this.productos);
  }
}
