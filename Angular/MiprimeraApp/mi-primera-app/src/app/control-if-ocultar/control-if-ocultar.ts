import { Component } from '@angular/core';

@Component({
  selector: 'app-control-if-ocultar',
  imports: [],
  templateUrl: './control-if-ocultar.html',
  styleUrl: './control-if-ocultar.css',
})
export class ControlIfOcultar {
  ocultar: boolean = false;

  ocultarBoton() {
    if (this.ocultar == true) {
      this.ocultar = false;
    } else {
      this.ocultar = true;
    }
  }
}
