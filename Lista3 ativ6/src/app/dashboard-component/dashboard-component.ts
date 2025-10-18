import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  irUsuarios() {
    this.router.navigate(['/dashboard/usuarios']);
  }

  irRelatorios() {
    this.router.navigate(['/dashboard/relatorios']);
  }
}
