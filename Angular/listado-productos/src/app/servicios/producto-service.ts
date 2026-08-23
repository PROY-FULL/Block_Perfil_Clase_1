import { Service } from '@angular/core';
import { Producto } from '../Models/productos';


@Service()
export class ProductoService {
  productos: Producto[] = [
    new Producto('Pantalon', 130),
    new Producto('Camisa', 80),
    new Producto('playera', 50)
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
