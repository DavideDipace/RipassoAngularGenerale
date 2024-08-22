import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email-Dipace';
  Email!: string[];

  Invia(a: HTMLInputElement, oggetto: HTMLInputElement, contenuto: HTMLInputElement): boolean {
    console.log(this.Email);
  return false;

  }
}
