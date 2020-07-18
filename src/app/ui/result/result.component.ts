import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/hangman.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
  }

  get won(): boolean {
    return this.hangmanService.won;
  }

  get wordToGuess(): string {
    return this.hangmanService.wordToGuess;
  }

  playAgainBtnClicked(): void {
    this.hangmanService.setGoingToRestartGame();
  }

}
