import { Component } from '@angular/core';

@Component({
  selector: 'app-scaffale',
  templateUrl: './scaffale.component.html',
  styleUrls: ['./scaffale.component.css']
})
export class ScaffaleComponent {
  cassetta1 : []
  constructor() {
    this.cassetta1 = 'frutta mista', 'insalate', 'frutta matura', 'ortaggi di stagione', 'verdura fresca'
  }
  ngOnInit() {
  }
}
