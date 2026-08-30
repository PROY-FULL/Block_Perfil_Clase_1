import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pacientes } from './pages/pacientes/pacientes';

export const routes: Routes = [
  {
    path: 'home', component: Home
  },
  {
    path: 'pacientes', component: Pacientes
  },
  {
    path: '', component: Home
  }
];
