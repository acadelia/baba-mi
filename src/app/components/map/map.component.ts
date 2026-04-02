import { Component, computed, HostListener, inject } from '@angular/core';
import { MovementService } from '../../services/actions/movement/movement.service';
import { CurrentLevelService } from '../../services/levels/current-level.service';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  movementService = inject(MovementService);
  currentLevelService = inject(CurrentLevelService);

  pressedKey: string = '';
  position = this.currentLevelService.playerPosition;
  flagPosition = this.currentLevelService.flagPosition;
  grid = this.currentLevelService.grid;

  reachedFlag = computed(
    () =>
      this.flagPosition().column === this.position().column &&
      this.flagPosition().row === this.position().row,
  );

  transform = computed(() => {
    const cellSize = 100;
    const offset = 10;

    const pos = this.position();

    const x = pos.column * cellSize;
    const y = pos.row * cellSize;

    return `translate(${x + offset}px, ${y + offset}px)`;
  });

  hasTop(row: number, col: number): boolean {
    return this.grid()[row - 1]?.[col] !== undefined;
  }

  hasBottom(row: number, col: number): boolean {
    return this.grid()[row + 1]?.[col] !== undefined;
  }

  hasLeft(row: number, col: number): boolean {
    return this.grid()[row]?.[col - 1] !== undefined;
  }

  hasRight(row: number, col: number): boolean {
    return this.grid()[row]?.[col + 1] !== undefined;
  }

  nextLevel() {
    this.currentLevelService.nextLevel();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const pos = this.position();

    const newPos = this.movementService.pathTraverse(this.grid(), pos.row, pos.column, event);

    this.currentLevelService.movePlayer(newPos);
  }
}
