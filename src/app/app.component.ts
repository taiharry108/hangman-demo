import { Component, OnInit, HostListener } from '@angular/core';
import { HangmanService } from './hangman.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private hangmanService: HangmanService) {}
  ngOnInit(): void {
    
    this.hangmanService.initService();    
    $('#resultModalCenter').modal();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeybaordEvent(event: KeyboardEvent) {
    
    if (event.key.match(/[a-zA-Z]/i))
      this.hangmanService.guessLetter(event.key.toLowerCase());
  }
  title = 'hangman';
}
