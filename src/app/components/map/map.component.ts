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
