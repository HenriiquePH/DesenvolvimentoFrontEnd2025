import { Routes } from '@angular/router';
import { GaleriaComponent } from './galeria-component/galeria-component';
import { DetalheImagemComponent } from './detalhe-imagem-component/detalhe-imagem-component';

export const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalhe', component: DetalheImagemComponent },
  { path: '', redirectTo: 'galeria', pathMatch: 'full' },
];
