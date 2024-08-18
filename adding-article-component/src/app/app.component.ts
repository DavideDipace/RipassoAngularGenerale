import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostBinding('attr.class') cssClass = 'card';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp():Boolean { //Aggiunto tipo di ritorno
    this.votes += 1;
    return false; //Non propagare l'evento 
}
voteDown():Boolean{
    this.votes -= 1;
    return false; //Non propagare l'evento 
}

  ngOnInit() {}
}
