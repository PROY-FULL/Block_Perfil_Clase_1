import { Component } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  miInvitado: string = 'RAUL LOPEZ';
  mensajeRecibido: string = '';

  recibirMensaje(texto: string) {
    console.log(texto);
    this.mensajeRecibido = texto;
  }

}
