import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/hangman.service';
import {
  state,
  style,
  animate,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
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

  ngOnInit(): void {
  }

  buttonClicked(): void {
    this.hangmanSerivce.wrongGuess();
    if (this.hangmanSerivce.gameOver) this.hangmanSerivce.restartGame();
  }

  get guessesLeft(): number {
    return this.hangmanSerivce.guessesLeft;
  }

  innerContainerClass(active: boolean): string {
    return active ? 'active' : '';
  }

  public getLetterFromIdx(idx: number): string {
    return this.hangmanSerivce.getLetterFromIdx(idx);
  }

}
