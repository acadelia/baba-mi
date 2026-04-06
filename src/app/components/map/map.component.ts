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
  obstacles = this.currentLevelService.obstaclesPosition;

  reachedFlag = computed(
    () =>
      this.flagPosition().column === this.position().column &&
      this.flagPosition().row === this.position().row,
  );

  move(element: any) {
    if (!element) {
      return null;
    }
    let x = 0;
    let y = 0;
    const cellSize = 100;
    const offset = 10;

    const pos = element;

    x = pos.column * cellSize;
    y = pos.row * cellSize;

    return `translate(${x + offset}px, ${y + offset}px)`;
  }

  findMapPosition(rowIndex: number, columnIndex: number, element: any) {
    if (Array.isArray(element)) {
      return element.find((el) => el?.row === rowIndex && el?.column === columnIndex);
    }

    return element?.row === rowIndex && element?.column === columnIndex;
  }

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
    if (this.reachedFlag()) return;

    const pos = this.position();

    const newPos = this.movementService.pathTraverse(this.grid(), pos.row, pos.column, event);

    const obstacles = this.obstacles();

    const hitIndex = obstacles.findIndex((o) => o.row === newPos.row && o.column === newPos.column);

    if (hitIndex !== -1) {
      const pushedPos = this.movementService.pathTraverse(
        this.grid(),
        obstacles[hitIndex].row,
        obstacles[hitIndex].column,
        event,
      );

      const blocked =
        obstacles.some((o) => o.row === pushedPos.row && o.column === pushedPos.column) ||
        (pushedPos.row === this.flagPosition().row &&
          pushedPos.column === this.flagPosition().column);

      if (blocked) return;

      obstacles[hitIndex] = pushedPos;
    }

    this.currentLevelService.movePlayer(newPos);
  }
}
