import { Component } from '@angular/core';

@Component({
  selector: 'app-cassetta',
  templateUrl: './cassetta.component.html',
  styleUrls: ['./cassetta.component.css']
})
export class CassettaComponent {
  contenuto : string[]
  constructor() {
    this.contenuto = ['pere', 'banane', 'fragole']
  }
  ngOnInit() {
  }
}
