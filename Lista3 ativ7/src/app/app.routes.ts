import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CursosComponent } from './cursos-component/cursos-component';
import { DetalheCursoComponent } from './detalhe-curso-component/detalhe-curso-component';
import { ProfessoresComponent } from './professores-component/professores-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/detalhe', component: DetalheCursoComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'professores/detalhe', component: DetalheProfessorComponent },
];
