import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex8.html',
  styleUrl: './ex8.css',
})
export class Ex8 {
  codigo: string = '';
  produto: string = ''; 

  verificarProduto() {
    if (this.codigo === '001') {            
      this.produto = 'Parafuso';
    } else if (this.codigo === '002') {     
      this.produto = 'Porca';
    } else if (this.codigo === '003') {     
      this.produto = 'Prego';
    } else {                               
      this.produto = 'Diversos';
    }
  }
}
