import { Component } from '@angular/core';

@Component({
  selector: 'app-scaffale',
  templateUrl: './scaffale.component.html',
  styleUrls: ['./scaffale.component.css']
})
export class ScaffaleComponent {
  cassette : string[]
  constructor() {
    this.cassette = ['frutta mista', 'insalate', 'frutta matura', 'ortaggi di stagione', 'verdura fresca']
  }
  ngOnInit() {
  }
}
