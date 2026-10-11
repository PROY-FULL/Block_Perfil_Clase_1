import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiServices } from '../../services/api-services';
import { IDoctores } from '../../Models/Doctores';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NuevoEditarDoctores } from './nuevo-editar-doctores/nuevo-editar-doctores';

@Component({
  selector: 'app-doctores',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule],
  templateUrl: './doctores.html',
  styleUrl: './doctores.css',
})
export class Doctores implements AfterViewInit {

  Doctores: IDoctores[] = [];
  displayedColumns: string[] = ['acciones', 'idDoctor', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'cedulaProfesional', 'telefono'];
  dataSource: MatTableDataSource<IDoctores> = new MatTableDataSource();
  dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiServices) {

  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.apiService.get('/Doctores').subscribe({
      next: (response: IDoctores[]) => {

        this.Doctores = response;

        this.dataSource.data = this.Doctores;
        console.log(this.Doctores);
      }

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialogEditar(doctor: any) {
    const dialogRef = this.dialog.open(NuevoEditarDoctores, {
      data: { tipo: "Editar Doctor", result: doctor },
      minWidth: '50%',
      minHeight: '70%',
      disableClose: true,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarDatos();
    })
  }

  openDialogNuevo() {
    const dialogRef = this.dialog.open(NuevoEditarDoctores, {
      data: { tipo: "Nuevo Doctor" },
      minWidth: '50%',
      minHeight: '70%',
      disableClose: true,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarDatos();
    })
  }
}
