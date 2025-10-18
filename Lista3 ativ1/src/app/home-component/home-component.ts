import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  template: `
    <p>Bem-vindo ao sistema!</p>
    <button routerLink="/sobre">Sobre</button>
    <button routerLink="/contato">Contato</button>
  `,
})
export class HomeComponent {}
