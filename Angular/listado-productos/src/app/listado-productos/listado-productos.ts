import { Component } from '@angular/core';
import { Producto } from '../Models/productos';
import { ProductoService } from '../servicios/producto-service';
import { Productos } from '../productos/productos';
import { Formulario } from "../formulario/formulario";

@Component({
  imports: [Productos, Formulario],
  selector: 'app-listado-productos',
  styleUrl: './listado-productos.css',
  templateUrl: './listado-productos.html',
})
export class ListadoProductos {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productos = this.productoService.productos;
    console.log(this.productos);
  }

}
