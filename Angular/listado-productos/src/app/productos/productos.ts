import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Producto } from '../Models/productos';

@Component({
  imports: [CommonModule],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  @Input() producto!: Producto;
}
