import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-interactivo',
  imports: [],
  templateUrl: './boton-interactivo.html',
  styleUrl: './boton-interactivo.css',
})
export class BotonInteractivo {
  valor: number = 0;

  Sumar() {
    this.valor = this.valor + 1; //0 + 1 = 1   1 +1 =2
  }
  Restar() {
    this.valor = this.valor - 1;
  }

}
