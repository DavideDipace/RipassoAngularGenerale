import { Component } from '@angular/core';
import { room } from './room.model';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  stanze : room[] = [];

  funzione( nome: HTMLInputElement, lettiS: HTMLInputElement, lettiD: HTMLInputElement, ID: HTMLInputElement): boolean{
    let stanza = new room(nome.value, lettiS.value, lettiD.value, ID.value);
    this.stanze.push(stanza)
    return false
  }
}
