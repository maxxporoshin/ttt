import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() value: 'X'|'O'|'';
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.value === '') {
      this.select.emit();
    }
  }

}
