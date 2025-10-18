import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex3',
  imports: [CommonModule, FormsModule],
  templateUrl: './ex3.html',
  styleUrl: './ex3.css',
})
export class Ex3 {
  valorSaldo: number | null = null;
  valorFinal: number | null = null;

  calcularReajuste() {
    const reajuste = 1 / 100;
    const valorAumento = Number(this.valorSaldo) * reajuste;
    this.valorFinal = Number(this.valorSaldo) + valorAumento;
  }
}
