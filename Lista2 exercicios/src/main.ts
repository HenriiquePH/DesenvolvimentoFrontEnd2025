import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ListaNumeros } from './app/lista-numeros/lista-numeros';
import { ListaCompras } from './app/lista-compras/lista-compras';
import { ContadorNomes } from './app/contador-nomes/contador-nomes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContadorNomes],
  template: `
    <app-contador-nomes></app-contador-nomes>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
