import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/dashboard-component']);
  }
}
