import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-numeros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-numeros.html',
  styleUrl: './lista-numeros.css',
})
export class ListaNumeros {
  // Número que será digitado no input
  novoNumero: number | null = null;

  // Soma e média
  soma: number | null = null;
  media: number | null = null;

  // Lista de números
  listaNumeros: number[] = [];

  // Adicionar número à lista
  adicionarNumero() {
    if (this.novoNumero !== null) {
      this.listaNumeros.push(this.novoNumero);
      this.novoNumero = null;
      this.atualizarSomaEMedia();
    }
  }

  // Remover número da lista
  removerNumero(index: number) {
    this.listaNumeros.splice(index, 1);
    this.atualizarSomaEMedia();
  }

  // Atualiza soma e média
  atualizarSomaEMedia() {
    this.soma = 0;
    for (let i = 0; i < this.listaNumeros.length; i++) {
      this.soma += this.listaNumeros[i];
    }

    if (this.listaNumeros.length > 0) {
      this.media = this.soma / this.listaNumeros.length;
    } else {
      this.media = null;
    }
  }
}
