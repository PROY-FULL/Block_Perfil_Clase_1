import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  imports: [],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css',
})
export class Semaforo {
  luzActual: string = 'rojo';
  coloresDisponibles: string[] = ['rojo', 'amarillo', 'verde', 'morado'];

  cambiarLuz(nuevoColor: string) {
    this.luzActual = nuevoColor;
  }
}
