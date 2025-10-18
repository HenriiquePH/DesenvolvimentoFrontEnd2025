import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex2.html',
  styleUrl: './ex2.css',
})
export class Ex2 {
  valorQuilo: number | null = null;
  quilosConsumido: number | null = null;
  valorFinal: number | null = null;

  calculo() {
    const n1 = Number(this.valorQuilo) || 0;
    const n2 = Number(this.quilosConsumido) || 0;
    this.valorFinal = n1 * n2;
  }
}
