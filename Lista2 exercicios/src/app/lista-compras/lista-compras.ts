import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css',
})
export class ListaCompras {
  // Produto que será digitado no input
  novoProduto: string = '';

  // Preço do produto que será digitado no input
  novoPreco: number | null = null;

  // Lista de produtos (contendo nome e preço)
  listaProdutos: { nome: string; preco: number }[] = [];

  // Valor total da compra (para quando não houver produtos na lista, não exibir valor. Por isso está nulo)
  total: number | null = null;

  // Adicionar produto à lista
  adicionarProduto() {
    if (this.novoProduto.trim() && this.novoPreco !== null) {
      this.listaProdutos.push({
        nome: this.novoProduto,
        preco: this.novoPreco,
      });

      // Limpa os inputs
      this.novoProduto = '';
      this.novoPreco = null;

      // Atualiza o total
      this.atualizarTotal();
    }
  }

  // Remover produto da lista
  removerProduto(index: number) {
    this.listaProdutos.splice(index, 1);
    this.atualizarTotal();
  }

  // Atualiza o valor total
  atualizarTotal() {
    this.total = 0;
    for (let i = 0; i < this.listaProdutos.length; i++) {
      this.total += this.listaProdutos[i].preco;
    }
  }
}
