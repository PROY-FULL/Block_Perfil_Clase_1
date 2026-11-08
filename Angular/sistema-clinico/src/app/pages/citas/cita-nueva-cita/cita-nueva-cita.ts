
import { Component, DestroyRef, inject, Inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
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
import { IDoctoresBusqueda } from '../../../Models/IDoctoresBusqueda';
import { MatSelectModule } from '@angular/material/select';
import { MatCalendarCellClassFunction, MatDatepickerModule } from '@angular/material/datepicker';
import { ITotalCitas } from '../../../Models/ITotalCitas';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-cita-nueva-cita',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule, MatAutocompleteModule, FormField, MatSelectModule, MatDatepickerModule],
  templateUrl: './cita-nueva-cita.html',
  styleUrl: './cita-nueva-cita.css',
})
export class CitaNuevaCita {
  titulo: string = 'Nueva / Editar Cita';
  searchControl = new FormControl('');
  searchControlDoctor = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions = signal<IPacienteBuscar[]>([]);
  filteredOptionsDoctor = signal<IDoctoresBusqueda[]>([]);
  private destroyRef = inject(DestroyRef);
  EstadosList: string[] = ['Pendiente', 'Confirmada', 'Completada', 'Cancelada'];
  protected totalPorFecha = signal<Record<string, number>>({});
  totalCitas: ITotalCitas[] = [];

  citasForms: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialogRef<CitaNuevaCita>
    , private fb: FormBuilder
    , private apiService: ApiServices) {

    this.setupSearch();
    this.setupSearchDoctor();

    this.citasForms = this.fb.group({
      IdCita: [0],
      IdPaciente: [0],
      IdDoctor: [0],
      Estado: [0],
      MotivoConsulta: [''],
      FechaHoraCita: [null],
      HoraCita: ['09:00']

    });
  }

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos() {
    this.apiService.get('/Citas/totalcitas').subscribe({
      next: (response: ITotalCitas[]) => {
        this.totalCitas = response;
        const mapaTotales: Record<string, number> = {};
        console.log(response)
        response.forEach(item => {
          const fecha = item.fechaCita.split('T')[0]; // 2026-11-08
          console.log(fecha)
          mapaTotales[fecha] = item.totalCita;

        });

        this.totalPorFecha.set(mapaTotales);

        console.log(mapaTotales);


      },
      error: (error: any) => {
        console.error('Error al consumir la API', error);
      }
    })
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
  private setupSearchDoctor() {
    this.searchControlDoctor.valueChanges
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

          return this.apiService.get(`/Doctores/buscar-doctores?texto=${texto}`).pipe(
            catchError(() => of([]))
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((results: IDoctoresBusqueda[]) => {
        console.log(results)
        this.filteredOptionsDoctor.set(results);
      });

  }
  displayFn = (paciente: IPacienteBuscar): string => {
    return paciente ? paciente.nombreCompleto : '';
  }

  displayFnDoctor = (doctores: IDoctoresBusqueda): string => {
    return doctores ? doctores.nombreCompleto : '';
    if (doctores) {
      return doctores.nombreCompleto
    } else {
      return '';
    }
  }
  onPacienteSelected(event: MatAutocompleteSelectedEvent) {
    const pacienteSelecciona: IPacienteBuscar = event.option.value;
    this.citasForms.patchValue({
      IdPaciente: pacienteSelecciona.idPaciente
    })

  }

  onDoctoresSelected(event: MatAutocompleteSelectedEvent) {
    const doctorSelecciona: IDoctoresBusqueda = event.option.value;
    this.citasForms.patchValue({
      IdDoctor: doctorSelecciona.idDoctor
    })

  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.

    if (view === 'month') {
      const year = cellDate.getFullYear();
      const month = String(cellDate.getMonth() + 1).padStart(2, '0');
      const day = String(cellDate.getDate()).padStart(2, '0');
      console.log(cellDate.getDay()) //lunes martes miercos
      console.log(cellDate.getDate())// 1,2,3
      const fechaActual = `${year}-${month}-${day}`;// 2026-11-08

      console.log(fechaActual)
      const total = this.totalPorFecha()[fechaActual] || 0;
      console.log(total)
      if (total >= 2) {
        return 'fecha-ocupada'
      } else {
        return 'fecha-libre'
      }

    }

    return '';
  };

  guardar() {

  }

  closeDialog() {
    this.dialog.close('close');
  }

}
