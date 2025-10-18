import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria-component',
  imports: [],
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.css',
})
export class GaleriaComponent {
  constructor(private router: Router) {}

  verDetalhe() {
    this.router.navigate(['/detalhe']);
  }
}
