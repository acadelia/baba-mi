import { inject, Injectable } from '@angular/core';
import { CurrentLevelService } from '../../levels/current-level.service';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  currentLevel = inject(CurrentLevelService);

  obstaclesPosition = this.currentLevel.obstaclesPosition;
  //should do to consider now the obstacles as well

  pathTraverse(grid: number[][], startRow: number, startCol: number, event: KeyboardEvent) {
    let nextRow = startRow;
    let nextCol = startCol;

    if (event.key === 'ArrowUp') {
      nextRow--;
    } else if (event.key === 'ArrowDown') {
      nextRow++;
    } else if (event.key === 'ArrowLeft') {
      nextCol--;
    } else if (event.key === 'ArrowRight') {
      nextCol++;
    }

    if (nextRow < 0 || nextRow >= grid.length) {
      return { row: startRow, column: startCol };
    }

    if (nextCol < 0 || nextCol >= grid[nextRow].length) {
      return { row: startRow, column: startCol };
    }

    return {
      row: nextRow,
      column: nextCol,
    };
  }

  // moveObstacle(grid: number[][], event: KeyboardEvent, sameIndex: boolean) {
  //   let wasPushed: string;

  //   if (event.key === 'ArrowUp') {
  //     wasPushed = 'up';
  //   } else if (event.key === 'ArrowDown') {
  //     wasPushed = 'down';
  //   } else if (event.key === 'ArrowLeft') {
  //     wasPushed = 'left';
  //   } else if (event.key === 'ArrowRight') {
  //     wasPushed = 'right';
  //   }
  // }
}
