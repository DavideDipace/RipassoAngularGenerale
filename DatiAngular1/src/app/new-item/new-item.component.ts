import { Component } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  name : string
  constructor() {
    this.name = 'felipe'
  }
  ngOnInit() {
  }
}
