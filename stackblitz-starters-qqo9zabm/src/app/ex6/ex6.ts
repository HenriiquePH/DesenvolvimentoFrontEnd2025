import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex6',
  standalone: true, // necessário quando se usa imports
  imports: [CommonModule, FormsModule],
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {
  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  valor4: number = 0;
  menorValor: string = '';

  validarMenor() {
    let menor = this.valor1;

    if (this.valor2 < menor) menor = this.valor2;
    if (this.valor3 < menor) menor = this.valor3;
    if (this.valor4 < menor) menor = this.valor4;

    this.menorValor = 'O menor valor é: ' + menor;
  }
}
