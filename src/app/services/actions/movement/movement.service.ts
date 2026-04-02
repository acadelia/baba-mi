import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
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
}
