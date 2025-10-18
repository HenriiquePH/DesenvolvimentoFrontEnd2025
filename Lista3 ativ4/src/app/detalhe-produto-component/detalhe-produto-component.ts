import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto-component',
  standalone: true,
  templateUrl: './detalhe-produto-component.html',
  styleUrl: './detalhe-produto-component.css'
})
export class DetalheProdutoComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/produtos-component']);
  }
}
