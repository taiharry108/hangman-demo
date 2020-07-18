import { Component, OnInit, HostListener } from '@angular/core';
import { HangmanService } from './hangman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private hangmanService: HangmanService) {}
  ngOnInit(): void {
    this.hangmanService.initService();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeybaordEvent(event: KeyboardEvent) {
    if (event.key.match(/[a-zA-Z]/i))
      this.hangmanService.guessLetter(event.key.toLowerCase());
  }
  title = 'hangman';
}
