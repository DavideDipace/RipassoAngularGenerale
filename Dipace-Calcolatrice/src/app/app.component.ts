import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dipace-Calcolatrice';
 
  addizione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
  console.log(num1.valueAsNumber + num2.valueAsNumber);
  return false;
  }

  sottrazione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
  console.log(num1.valueAsNumber - num2.valueAsNumber);
  return false;
  }
  
  divisione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
  console.log(num1.valueAsNumber / num2.valueAsNumber);
  return false;
  }
  
  moltiplicazione(num1: HTMLInputElement, num2: HTMLInputElement): boolean {
  console.log(num1.valueAsNumber * num2.valueAsNumber);
  return false;
  }
  ngOnInit() {}
}
