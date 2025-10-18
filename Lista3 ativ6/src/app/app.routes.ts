import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { UsuariosComponent } from './usuarios-component/usuarios-component';
import { DetalheUsuarioComponent } from './detalhe-usuario-component/detalhe-usuario-component';
import { RelatoriosComponent } from './relatorios-component/relatorios-component';
import { VendasComponent } from './vendas-component/vendas-component';
import { EstoqueComponent } from './estoque-component/estoque-component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/usuarios', component: UsuariosComponent },
  { path: 'dashboard/usuarios/detalhe', component: DetalheUsuarioComponent },
  { path: 'dashboard/relatorios', component: RelatoriosComponent },
  { path: 'dashboard/relatorios/vendas', component: VendasComponent },
  { path: 'dashboard/relatorios/estoque', component: EstoqueComponent },
];
