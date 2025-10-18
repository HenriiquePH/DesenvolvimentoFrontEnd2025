import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex5',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex5.html',
  styleUrl: './ex5.css',
})
export class Ex5 {
  valor1: number = 0;
  valor2: number = 0;
  resultado: string | null = null;

  compararValores() {
    if (this.valor1 > this.valor2) {
      this.resultado = 'O maior valor é o: ' + this.valor1;
    } else if (this.valor2 > this.valor1) {
      this.resultado = 'O maior valor é o: ' + this.valor2;
    } else {
      this.resultado = 'Os dois valores são iguais';
    }
  }
}
