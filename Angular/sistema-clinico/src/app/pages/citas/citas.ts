import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IPacientes } from '../../Models/Pacientes';
import { ApiServices } from '../../services/api-services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CitaNuevaCita } from './cita-nueva-cita/cita-nueva-cita';
import { ICitas } from '../../Models/Citas';

@Component({
  selector: 'app-citas',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatIconModule],
  templateUrl: './citas.html',
  styleUrl: './citas.css',
})
export class Citas implements OnInit {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['acciones', 'idCita', 'paciente', 'medico', 'fechaCita', 'estado', 'motivoConsulta'];
  dataSource: MatTableDataSource<ICitas> = new MatTableDataSource()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private apiService: ApiServices) {

  }

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos() {
    this.apiService.get('/Citas').subscribe({
      next: (response: ICitas[]) => {
        this.dataSource.data = response;
      },
      error: (error: any) => {
        console.log('Error al consumir la API:', error);
      }

    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDialogNuevo() {
    const dialogRef = this.dialog.open(CitaNuevaCita, {
      data: { tipo: 'Nueva Cita' },
      width: '450px',
      height: '600px',
      minWidth: '9%',
      minHeight: '70%',
      disableClose: true,
      panelClass: 'dialog-pantalla-completa'

    });

    dialogRef.afterClosed().subscribe(result => {
      this.CargarDatos();
    });
  }
  openDialog(element: any) {

  }
}


