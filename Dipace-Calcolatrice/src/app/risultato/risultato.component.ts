import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css']
})
export class RisultatoComponent {
    @Input() risultato: any;

    constructor() {

    }
    ngOnInit() {}
}
