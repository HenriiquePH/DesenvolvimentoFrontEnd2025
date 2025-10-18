import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { DashboardComponent } from './dashboard-component/dashboard-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login-component', pathMatch: 'full' },
  { path: 'login-component', component: LoginComponent },
  { path: 'dashboard-component', component: DashboardComponent },
];
