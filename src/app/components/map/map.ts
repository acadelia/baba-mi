import { Component, HostListener, inject } from '@angular/core';
import { Movement } from '../../actions/movement/movement.service';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  movement = inject(Movement);
  pressedKey: string = '';
  position = {
    row: 0,
    column: 0,
  };

  grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    this.position = this.movement.pathTraverse(
      this.grid,
      this.position.row,
      this.position.column,
      event,
    );
  }
}
