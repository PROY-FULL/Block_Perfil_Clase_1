
import { Component, DestroyRef, inject, Inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApiServices } from '../../../services/api-services';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormField } from '@angular/forms/signals';
import { IPacientes } from '../../../Models/Pacientes';
import { catchError, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IPacienteBuscar } from '../../../Models/PacienteBuscar';
@Component({
  selector: 'app-cita-nueva-cita',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule, MatAutocompleteModule, FormField],
  templateUrl: './cita-nueva-cita.html',
  styleUrl: './cita-nueva-cita.css',
})
export class CitaNuevaCita {
  titulo: string = 'Nueva / Editar Cita';
  searchControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions = signal<IPacienteBuscar[]>([]);
  private destroyRef = inject(DestroyRef);

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialogRef<CitaNuevaCita>
    , private fb: FormBuilder
    , private apiService: ApiServices) {

    this.setupSearch()
  }

  private setupSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(searchTerm => {
          if (typeof searchTerm !== 'string') {
            return of([]);
          }
          const texto = searchTerm.trim();
          if (!texto) {
            return of([]);
          }

          return this.apiService.get(`/Pacientes/buscar-pacientes?texto=${texto}`).pipe(
            catchError(() => of([]))
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((results: IPacienteBuscar[]) => {
        console.log(results)
        this.filteredOptions.set(results);
      });

  }
  displayFn = (paciente: IPacienteBuscar): string => {
    return paciente ? paciente.nombreCompleto : '';
  }

  onPacienteSelected(event: MatAutocompleteSelectedEvent) {
    const pacienteSelecciona: IPacienteBuscar = event.option.value;


  }

  closeDialog() {
    this.dialog.close('close');
  }

}
