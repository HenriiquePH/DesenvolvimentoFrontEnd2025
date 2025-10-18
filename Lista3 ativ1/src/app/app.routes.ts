import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { SobreComponent } from './sobre-component/sobre-component';
import { ContatoComponent } from './contato-component/contato-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
];
