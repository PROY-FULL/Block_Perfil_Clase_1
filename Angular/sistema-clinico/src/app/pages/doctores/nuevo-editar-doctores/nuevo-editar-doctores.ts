import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServices } from '../../../services/api-services';
import { IEspecialidades } from '../../../Models/Especialidades';

@Component({
  selector: 'app-nuevo-editar-doctores',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nuevo-editar-doctores.html',
  styleUrl: './nuevo-editar-doctores.css',
})
export class NuevoEditarDoctores {
  titulo: string = "";
  Especialidades: IEspecialidades[] = [];
  doctorForm: FormGroup;

  constructor(private apiService: ApiServices,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialogRef<NuevoEditarDoctores>,
    private fb: FormBuilder) {

    this.doctorForm = this.fb.group({
      IdDoctor: [0],
      IdUsuario: [1],
      IdEspecialidad: [1],
      Nombre: ['', [Validators.required]],
      ApellidoPaterno: ['', [Validators.required]],
      ApellidoMaterno: ['', [Validators.required]],
      CedulaProfesional: ['', [Validators.required]],
      Telefono: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.titulo = this.data.tipo;

    if (this.titulo == "Editar Doctor") {
      const datosDoctor = {
        IdDoctor: this.data.result.idDoctor,
        Nombre: this.data.result.nombre,
        ApellidoPaterno: this.data.result.apellidoPaterno,
        ApellidoMaterno: this.data.result.apellidoMaterno,
        CedulaProfesional: this.data.result.cedulaProfesional,
        Telefono: this.data.result.telefono,
      };

      this.doctorForm.patchValue(datosDoctor);
    }

    this.cargarCatalogos();
  }
  cargarCatalogos() {
    this.apiService.get('/Especialidades').subscribe({
      next: (response: IEspecialidades[]) => {
        this.Especialidades = response;
        console.log(this.Especialidades)
      },
      error: (error: any) => {
        console.log('error api', error)
      }
    })

  }
  guardar() {
    console.log(this.data.tipo)
    if (this.data.tipo == "Editar Doctor") {
      this.apiService.put('/Doctores' + "/" + this.data.result.idDoctor, this.doctorForm.value).subscribe({
        next: (resp) => {
          console.log("se guardo correctamente");
          this.closeDialog();
        },
        error: (err) => {
          console.log("Error al editar", err);
        }
      });
    } else {
      this.apiService.post('/Doctores', this.doctorForm.value).subscribe({
        next: (resp) => {
          this.closeDialog();
        }
      })
    }
  }

  closeDialog() {
    this.dialog.close('close');
  }
}
