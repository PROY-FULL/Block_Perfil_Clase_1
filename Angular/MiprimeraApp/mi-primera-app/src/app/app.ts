import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonInteractivo } from "./boton-interactivo/boton-interactivo";
import { TwoWayDataBinding } from './two-way-data-binding/two-way-data-binding';
import { ControlFlujo } from './control-flujo/control-flujo';
import { ControlIfOcultar } from './control-if-ocultar/control-if-ocultar';
import { Calculadora } from "./calculadora/calculadora";
import { Semaforo } from './semaforo/semaforo';
import { Padre } from './padre/padre';
import { Pipes } from './pipes/pipes';
import { ListadoProductos } from './listado-productos/listado-productos';

@Component({
  selector: 'app-root',
  imports: [
    BotonInteractivo,
    TwoWayDataBinding,
    ControlFlujo,
    ControlIfOcultar,
    Calculadora,
    Semaforo,
    Padre,
    Pipes,
    ListadoProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primera-app');
  titulo: string = 'Tienda de Productos';
}
