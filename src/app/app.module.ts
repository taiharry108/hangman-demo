import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanComponent } from './ui/hangman/hangman.component';
import { ControlPanelComponent } from './ui/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
