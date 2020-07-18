import { Injectable } from '@angular/core';
import { words } from './words';

export interface KeyboardKey {
  value: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  private _numOfWrongGuesses: number;
  private _gameOver: boolean;
  private _availableKeys: KeyboardKey[];
  private _words: string[];
  private _wordToGuess: string;
  private _guessedLetters: Set<string>;
  private _guessedRight: boolean[];

  constructor() {}

  initService(): void {
    const chars = 'qwertyuiopasdfghjklzxcvbnm';
    this._availableKeys = Array.from(chars).map(
      (s): KeyboardKey => {
        return { value: s, available: true };
      }
    );
    this._words = words;
    this.restartGame();
  }

  wrongGuess(): void {
    if (!this._gameOver && this._numOfWrongGuesses < 6) {
      console.log('wrong guess', this._numOfWrongGuesses);
      this._numOfWrongGuesses += 1;
      if (this._numOfWrongGuesses == 6) {
        console.log('game is over!');
        this._gameOver = true;
      }
    }
  }

  get numOfWrongGuesses(): number {
    return this._numOfWrongGuesses;
  }

  get gameOver(): boolean {
    return this._gameOver;
  }

  get availableKeys(): KeyboardKey[] {
    return [...this._availableKeys];
  }

  get guessedRight(): boolean[] {
    return [...this._guessedRight];
  }

  restartGame(): void {
    this._numOfWrongGuesses = 0;
    this._gameOver = false;
    this._wordToGuess = this._words[
      Math.floor(Math.random() * this._words.length)
    ];
    this._wordToGuess = this._wordToGuess.toLowerCase();
    this._guessedLetters = new Set<string>();
    this._guessedRight = Array.from(this._wordToGuess, (s) => false);
    console.log(this._wordToGuess, this._guessedRight);
  }

  guessLetter(letter: string): void {
    if (this._gameOver) return;

    if (!this._guessedLetters.has(letter)) {
      this._guessedLetters.add(letter);
      if (this._wordToGuess.includes(letter)) {
        const idices = Array.from(this._wordToGuess).reduce(
          (arr, e, i) => (e == letter && arr.push(i), arr),
          []
        );
        idices.map((idx) => (this._guessedRight[idx] = true));
      } else {
        this.wrongGuess();
      }
    }
  }

  letterGuessed(letter: string): boolean {
    return this._guessedLetters.has(letter);
  }

  get guessesLeft(): number {
    return 6 - this._numOfWrongGuesses;
  }

  public getLetterFromIdx(idx: number): string {
    return this._wordToGuess[idx];
  }
}
