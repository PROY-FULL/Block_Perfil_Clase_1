import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  operadorA: number = 0;
  operadorB: number = 0;
  resultado: number = 0;

  Sumar() {
    this.resultado = this.operadorA + this.operadorB;
  }

  Restar() {
    this.resultado = this.operadorA - this.operadorB;
  }

  Limpiar() {
    this.resultado = 0;
    this.operadorA = 0;
    this.operadorB = 0;
  }
}
