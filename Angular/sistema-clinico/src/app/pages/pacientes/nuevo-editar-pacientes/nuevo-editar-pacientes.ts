import { Component, inject, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServices } from '../../../services/api-services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-nuevo-editar-pacientes',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './nuevo-editar-pacientes.html',
  styleUrl: './nuevo-editar-pacientes.css',
})
export class NuevoEditarPacientes {
  titulo: string = '';
  pacienteForm: FormGroup;
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = signal(5);
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialogRef<NuevoEditarPacientes>
    , private fb: FormBuilder
    , private apiService: ApiServices) {

    this.pacienteForm = this.fb.group({
      IdPaciente: [0],
      Nombre: ['', Validators.required],
      ApellidoPaterno: ['', Validators.required],
      ApellidoMaterno: ['', Validators.required],
      FechaNacimiento: [null, Validators.required],
      Telefono: ['', Validators.required],
      Genero: ['', Validators.required],
      Direccion: ['', Validators.required],
      TipoSangre: ['', Validators.required],
      ContactoEmergenciaNombre: ['', Validators.required],
      ContactoEmergenciaTelefono: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    this.titulo = this.data.tipo;
  }

  NuevoEditar() {
    console.log(this.pacienteForm.value);
    this.apiService.post('/Pacientes', this.pacienteForm.value).subscribe({
      next: (res) => {
        console.log('registro creado');
        /*   this._snackBar.openFromComponent(PizzaPartyComponent, {
        duration: this.durationInSeconds() * 1000,
      });*/
        this.closeDialog();
      },
      error: (err) => {
        console.error('Error en Login', err);
      }
    });
  }

  closeDialog() {
    this.dialog.close('close');
  }

}
