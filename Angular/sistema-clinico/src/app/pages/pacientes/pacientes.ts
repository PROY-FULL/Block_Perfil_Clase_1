import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IPacientes } from '../../Models/Pacientes';
import { ApiServices } from '../../services/api-services';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pacientes',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes implements AfterViewInit {

  Pacientes: IPacientes[] = [];

  displayedColumns: string[] = ['acciones', 'idPaciente', 'nombreCompleto', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'telefono'];
  dataSource: MatTableDataSource<IPacientes> = new MatTableDataSource()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiServices) {

  }

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos() {
    this.apiService.get('/Pacientes').subscribe({
      next: (response: IPacientes[]) => {
        this.Pacientes = response;
        this.dataSource.data = response;
      },
      error: (error: any) => {
        console.log('Error al consumir la API:', error);
      }

    });
  }

  ngAfterViewInit() {
    if (this.dataSource && this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(paciente: any) {
    throw new Error('Method not implemented.');
  }
}



