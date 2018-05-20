import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() startNewGame = new EventEmitter();
  @Input() n = 5;
  @Input() tilesInARow = 3;

  constructor() { }

  ngOnInit() {
  }

  onStartClick() {
    const n = this.n;
    const tilesInARow = this.tilesInARow;
    this.startNewGame.emit({ n, tilesInARow });
  }

}
