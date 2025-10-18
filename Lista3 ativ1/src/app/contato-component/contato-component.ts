import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato-component.html',
  styleUrl: './contato-component.css',
  template: `
    <p>Página de contato</p>
    <button (click)="voltar()">Voltar para Home</button>
  `,
})
export class ContatoComponent {
  constructor(private router: Router) {}
  voltar() {
    this.router.navigate(['/']);
  }
}
