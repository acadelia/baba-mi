import { Component, HostListener, inject } from '@angular/core';
import { MovementService } from '../../actions/movement/movement.service';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  movementService = inject(MovementService);
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

  getTransform(): string {
    const cellSize = 100;
    const offset = 10;

    const x = this.position.column * cellSize;
    const y = this.position.row * cellSize;

    return `translate(${x + offset}px, ${y + offset}px)`;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    this.position = this.movementService.pathTraverse(
      this.grid,
      this.position.row,
      this.position.column,
      event,
    );
  }
}
