
import { Component, Input } from '@angular/core';
import { Producto } from '../Modelos/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  @Input() producto!: Producto;
}
