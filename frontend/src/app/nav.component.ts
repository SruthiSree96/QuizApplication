import { Component } from '@angular/core';
import {QuestionComponent} from './question.component'

@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
  <button mat-button routerLink="/">Quiz</button>
  <span style="flex: 1 1 auto;"></span>
  <button mat-button routerLink="/register">Register</button>
  </mat-toolbar>
  `
})
export class NavComponent {
  title = 'frontend';
}