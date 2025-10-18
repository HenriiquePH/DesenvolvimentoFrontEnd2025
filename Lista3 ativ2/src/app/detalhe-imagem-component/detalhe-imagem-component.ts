import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-imagem-component',
  imports: [],
  templateUrl: './detalhe-imagem-component.html',
  styleUrl: './detalhe-imagem-component.css',
})
export class DetalheImagemComponent {
  constructor(private router: Router) {}

  voltarGaleria() {
    this.router.navigate(['/galeria']);
  }
}
