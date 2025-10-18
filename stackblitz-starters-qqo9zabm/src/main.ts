import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Ex1 } from './app/ex1/ex1';
import { Ex2 } from './app/ex2/ex2';
import { Ex3 } from './app/ex3/ex3';
import { Ex4 } from './app/ex4/ex4';
import { Ex5 } from './app/ex5/ex5';
import { Ex6 } from './app/ex6/ex6';
import { Ex7 } from './app/ex7/ex7';
import { Ex8 } from './app/ex8/ex8';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Ex1, Ex2, Ex3, Ex4, Ex5,
  Ex6, Ex7, Ex8],
  template: `
  <app-ex1></app-ex1>
  <app-ex2></app-ex2>
  <app-ex3></app-ex3>
  <app-ex4></app-ex4>
  <app-ex5></app-ex5>
  <app-ex6></app-ex6>
  <app-ex7></app-ex7>
   <app-ex8></app-ex8>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
