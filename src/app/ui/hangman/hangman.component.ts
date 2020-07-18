import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit {
  constructor(private hangmanSerivce: HangmanService) {}

  get numOfWrongGuesses(): number {
    return this.hangmanSerivce.numOfWrongGuesses;
  }

  get uncoveredLetters(): string[] {
    return this.hangmanSerivce.uncoveredLetters;
  }

  getImgStyle() {
    const imgStyle = {
      transform: `translateX(${this.numOfWrongGuesses * -75}px)`,
    };
    return imgStyle;
  }

  ngOnInit(): void {}

  buttonClicked(): void {
    this.hangmanSerivce.wrongGuess();
    if (this.hangmanSerivce.gameOver)
      this.hangmanSerivce.restartGame();
  }
}
