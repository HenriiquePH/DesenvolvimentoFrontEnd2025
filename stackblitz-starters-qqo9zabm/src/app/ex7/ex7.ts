import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex7.html',
  styleUrl: './ex7.css',
})
export class Ex7 {
  valor: number = 0;
  resultado: string = '';

  validarNumero() {
    if (this.valor % 2 !== 0) {
      this.resultado = 'O valor ' + this.valor + ' é impar';
    } else {
      this.resultado = 'Este número não é impar';
    }
  }
}
