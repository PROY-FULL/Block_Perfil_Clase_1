import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../servicios/producto-service';
import { Producto } from '../Models/productos';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  descripcion: string = '';
  precionInput: number | null = null;

  constructor(private productoService: ProductoService) { }

  agregarProducto(evento: any) {

    if (this.descripcion.trim() == '' || this.precionInput == null || this.precionInput <= 0) {
      console.log('Debe ingresar una descripcion y un precio valido');
      return;
    }

    const producto = new Producto(this.descripcion, this.precionInput);

    this.productoService.agregarProducto(producto);

    this.descripcion = '';
    this.precionInput = null;

  }
}
