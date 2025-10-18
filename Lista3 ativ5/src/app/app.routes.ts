import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias-component/noticias-component';
import { DetalheNoticiaComponent } from './detalhe-noticia-component/detalhe-noticia-component';

export const routes: Routes = [
  { path: '', redirectTo: 'noticias-component', pathMatch: 'full' },
  { path: 'noticias-component', component: NoticiasComponent },
  { path: 'detalhe-noticia-component', component: DetalheNoticiaComponent },
];
