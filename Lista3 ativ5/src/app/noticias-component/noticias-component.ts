import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias-component',
  standalone: true,
  templateUrl: './noticias-component.html',
  styleUrl :'./noticias-component.css'
})
export class NoticiasComponent {
  constructor(private router: Router) {}

  lerMais() {
    this.router.navigate(['/detalhe-noticia-component']);
  }
}
