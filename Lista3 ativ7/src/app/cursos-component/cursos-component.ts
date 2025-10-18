import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos-component.html',
  styleUrl: './cursos-component.css'
})
export class CursosComponent {}
