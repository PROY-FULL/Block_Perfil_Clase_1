import { Component } from '@angular/core';
import { Usuarios } from '../servicios/usuarios';

@Component({
  imports: [],
  selector: 'app-listado-usuarios',
  styleUrl: './listado-usuarios.css',
  templateUrl: './listado-usuarios.html',
})
export class ListadoUsuarios {
  usuarios: any[] = [];
  constructor(private usuarioService: Usuarios) { }
  palabra: string = '';
  ngOnInit() {
    this.usuarioService.obtenerDatos().subscribe((datos) => {
      this.usuarios = datos;
    })
  }

  buscar() {
    const resultados = this.usuarios.filter(id => id = this.palabra);
    this.usuarios = resultados;

  }

  /* limpiar() {
     this.usuarios = this.usuarioorigal;
   }*/
}
