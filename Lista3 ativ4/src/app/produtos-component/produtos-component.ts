import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-component',
  standalone: true,
  templateUrl: './produtos-component.html',
  styleUrl: './produtos-component.css'
})
export class ProdutosComponent {
  constructor(private router: Router) {}

  verDetalhe() {
    this.router.navigate(['/produto-component']);
  }
}
