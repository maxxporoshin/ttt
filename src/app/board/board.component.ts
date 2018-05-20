import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() n: number;
  @Output() makeTurn: EventEmitter<{i: number, j: number}> = new EventEmitter();
  @Input() board: Board<'X'|'O'|''>;

  constructor() { }

  ngOnInit() {
  }

  onSelect(i: number, j: number) {
    this.makeTurn.emit({ i, j });
  }

}
