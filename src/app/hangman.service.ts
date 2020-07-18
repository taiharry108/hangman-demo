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
  private _uncoveredLetters: string[];

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
    if (this._numOfWrongGuesses <= 5) this._numOfWrongGuesses += 1;
    else this._gameOver = true;
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

  get uncoveredLetters(): string[] {
    return [...this._uncoveredLetters];
  }

  restartGame(): void {
    this._numOfWrongGuesses = 0;
    this._gameOver = false;
    this._wordToGuess = this._words[
      Math.floor(Math.random() * this._words.length)
    ];    
    this._wordToGuess = this._wordToGuess.toLowerCase();
    this._guessedLetters = new Set<string>();
    this._uncoveredLetters = Array.from(this._wordToGuess, (s) => '');

    console.log(this._wordToGuess, this._uncoveredLetters);
  }

  guessLetter(letter: string): void {
    if (!this._guessedLetters.has(letter)) {
      this._guessedLetters.add(letter);
      if (this._wordToGuess.includes(letter)) {
        const idices = Array.from(this._wordToGuess).reduce(
          (arr, e, i) => (e == letter && arr.push(i), arr),
          []
        );
        idices.map((idx) => this._uncoveredLetters[idx] = this._wordToGuess[idx]);
      } else {
        this.wrongGuess();
      }
    }
  }
}
