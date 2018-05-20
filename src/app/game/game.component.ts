import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { Point } from '../point';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  n = 5;
  tilesInARow = 3;
  currentPlayer: 'X'|'O' = 'X';
  gameFinished = false;
  board = new Board(this.n, <'X'|'O'|''>'');

  constructor() {}

  onMakeTurn({ i, j }: Point) {
    if (this.gameFinished) {
      return;
    }
    this.board.set(i, j, this.currentPlayer);
    if (this.checkWinCondition(i, j)) {
      this.gameFinished = true;
      return;
    }
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinCondition(i, j): boolean {
    const p = this.board.get(i, j);
    const k = this.tilesInARow;
    const vectors: Point[] = [
      { i: 0, j: 1 },
      { i: 1, j: 0 },
      { i: 1, j: 1 },
      { i: -1, j: 1}
    ];
    for (let x = i - k + 1;  x <= i + k; x++) {
      for (let y = j - k + 1; y <= j; y++) {
        for (const vector of vectors) {
          if (this.checkSector({ i: x, j: y }, vector)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  checkSector(start: Point, vector: Point): boolean {
    const k = this.tilesInARow;
    let count = 0;
    for (let i = 0; i < k; i++) {
      const I = (start.i + vector.i * i);
      const J = (start.j + vector.j * i);
      const p = this.board.get(I, J);
      if (p === this.currentPlayer) {
        count += 1;
      }
    }
    if (count === k) {
      return true;
    }
    return false;
  }

  onStartNewGame({ n, tilesInARow }) {
    this.n = n;
    this.tilesInARow = tilesInARow;
    this.board.fill(n, '');
    this.gameFinished = false;
    this.currentPlayer = 'X';
  }

}
