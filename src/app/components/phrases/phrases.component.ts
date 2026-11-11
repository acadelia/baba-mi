import { Component } from '@angular/core';
import { GridService } from '../../services/grid/grid.service';
import { PHRASES } from '../../common/const/phrases.const';
import { IPhrases } from '../../common/interfaces/phrases.interface';

@Component({
  selector: 'app-phrases',
  standalone: false,
  templateUrl: './phrases.component.html',
  styleUrl: './phrases.component.css',
})
export class PhrasesComponent {
  phrases = PHRASES.map((p) => ({
    ...p,
    words: p.phrase.split(' '),
  }));

  constructor(private gridService: GridService) {}

  getStyle(pos: { row: number; column: number }) {
    // const { cellSize, offset } = this.gridService;
    // const x = offset.x + pos.column * cellSize;
    // const y = offset.y + pos.row * cellSize;
    // return `translate(${x}px, ${y}px)`;
  }
  //pozitie absoluta pe baza la mapa?

  switchStatus(val: IPhrases) {
    if (val.shouldBeInALine === false) {
      val.state = 'active';
    }
  }
}
