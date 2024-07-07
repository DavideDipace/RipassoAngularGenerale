import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScaffaleComponent } from './scaffale/scaffale.component';
import { CassettaComponent } from './cassetta/cassetta.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaffaleComponent,
    CassettaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
