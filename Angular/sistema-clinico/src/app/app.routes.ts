import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pacientes } from './pages/pacientes/pacientes';
import { Doctores } from './pages/doctores/doctores';

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
    path: '', component: Home
  }
];
