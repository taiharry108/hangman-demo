import { Component, OnInit } from '@angular/core';
import { HangmanService, KeyboardKey } from 'src/app/hangman.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {}

  get availableKeys(): KeyboardKey[] {
    return this.hangmanService.availableKeys;
  }

  get rowsOfKeys(): KeyboardKey[][] {
    return [this.firstRowKeys, this.secondRowKeys, this.thirdRowKeys];
  }

  get firstRowKeys(): KeyboardKey[] {
    return this.hangmanService.availableKeys.slice(0, 10);
  }

  get secondRowKeys(): KeyboardKey[] {
    return this.hangmanService.availableKeys.slice(10, 19);
  }

  get thirdRowKeys(): KeyboardKey[] {
    return this.hangmanService.availableKeys.slice(19, 26);
  }

  keyboardBtnClicked(key: string): void {
    this.hangmanService.guessLetter(key);
  }

  letterGuessed(letter: string): boolean {
    if (this.hangmanService.gameOver || this.hangmanService.won) return true;
    return this.hangmanService.letterGuessed(letter);
  }

  restartGame(): void {
    this.hangmanService.restartGame();
  }
}
