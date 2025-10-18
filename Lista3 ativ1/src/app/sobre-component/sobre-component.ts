import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sobre-component.html',
  styleUrl: './sobre-component.css',
  template: `
    <p>Sobre este sistema</p>
    <button routerLink="/">Voltar para Home</button>
  `,
})
export class SobreComponent {}
