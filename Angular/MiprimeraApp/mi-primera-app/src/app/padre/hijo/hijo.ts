import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input() nombreUsuario: string = '';
  @Output() alHacerClick = new EventEmitter<string>();

  enviarDatos() {
    this.alHacerClick.emit('Hola desde el hijo');
  }
}
