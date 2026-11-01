import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pacientes } from './pages/pacientes/pacientes';
import { Doctores } from './pages/doctores/doctores';
import { Citas } from './pages/citas/citas';

export const routes: Routes = [
  {
    path: 'home', component: Home
  },
  {
    path: 'pacientes', component: Pacientes
  },
  {
    path: 'doctores', component: Doctores
  },
  {
    path: 'citas', component: Citas
  },
  {
    path: '', component: Home
  }
];
