import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador-nomes',
  imports: [FormsModule, CommonModule],
  templateUrl: './contador-nomes.html',
  styleUrl: './contador-nomes.css',
})
export class ContadorNomes {
  // Nome que será digitado no input
  novoNome: string = '';

  // Lista de nomes
  listaNomes: string[] = [];

  // Contador de nomes iniciando nulo
  contador: number | null = null;

  // Função para adicionar nomes na lista
  adicionarNome() {
    if (this.novoNome.trim()) {
      this.listaNomes.push(this.novoNome);
      this.novoNome = '';
      this.atualizarContador(); // Atualiza o contador
    }
  }

  // Remover um nome da lista
  removerNome(index: number) {
    this.listaNomes.splice(index, 1);
    this.atualizarContador(); // Atualiza o contador
  }

  // Função para atualizar o contador
  atualizarContador() {
    if (this.listaNomes.length === 0) {
      this.contador = null; // Nenhum nome na lista
    } else {
      this.contador = this.listaNomes.length;
    }
  }
}
