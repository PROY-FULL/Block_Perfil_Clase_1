import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoUsuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('listado-usuarios');
}
