import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './professores-component.html',
  styleUrl: './professores-component.css'
})
export class ProfessoresComponent {}
