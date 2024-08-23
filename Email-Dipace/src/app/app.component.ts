import { Component, Input } from '@angular/core';
import { Email } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email-Dipace';
  email : Email[];
constructor(){
    console.log(Email);
  }
}