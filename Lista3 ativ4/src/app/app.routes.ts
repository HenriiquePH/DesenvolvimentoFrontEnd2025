import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos-component/produtos-component';
import { DetalheProdutoComponent } from './detalhe-produto-component/detalhe-produto-component';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos-component', pathMatch: 'full' },
  { path: 'produtos-component', component: ProdutosComponent },
  { path: 'produto-component', component: DetalheProdutoComponent },
];
