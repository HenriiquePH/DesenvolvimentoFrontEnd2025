import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex1.html',
  styleUrl: './ex1.css',
})
export class Ex1 {
  valorPago: number | null = null;
  precoProduto: number | null = null;
  troco: number | null = null;

  calcularTroco() {
    let n1 = this.valorPago || 0;
    let n2 = this.precoProduto || 0;
    this.troco = n1 - n2;
  }
}
