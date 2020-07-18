import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  get guessedRight(): boolean[] {
    return this.hangmanSerivce.guessedRight;
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
    if (this.hangmanSerivce.gameOver) this.hangmanSerivce.restartGame();
  }

  get guessesLeft(): number {
    return this.hangmanSerivce.guessesLeft;
  }

  public getLetterFromIdx(idx: number): string {
    return this.hangmanSerivce.getLetterFromIdx(idx);
  }
}
