export class Board<T> {
  private board: T[][];

  constructor(private n?: number, v?: T) {
    if (n) {
      this.fill(n, v);
    }
  }

  fill(n: number, v?: T): Board<T> {
    this.n = n;
    this.board = Array(n).fill(null)
      .map(e => Array(n).fill(v));
    return this;
  }

  get(i: number, j: number): T {
    if (i < 0 || i >= this.n || j < 0 || j >= this.n) {
      return null;
    }
    return this.board[i][j];
  }

  set(i: number, j: number, v: T): T {
    this.board[i][j] = v;
    return v;
  }

  getBoard(): T[][] {
    return this.board;
  }
}
