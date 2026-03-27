import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  pathTraverse(grid: number[][], startRow: number, startCol: number, event: KeyboardEvent) {
    const maxRow = grid.length - 1;
    const maxCol = grid[0].length - 1;
    let row: number = startRow;
    let column: number = startCol;

    if (event.key === 'ArrowUp' && row > 0) {
      row--;
    } else if (event.key === 'ArrowDown' && row < maxRow) {
      row++;
    } else if (event.key === 'ArrowLeft' && column > 0) {
      column--;
    } else if (event.key === 'ArrowRight' && column < maxCol) {
      column++;
    }

    return {
      row: row,
      column: column,
    };
  }
}
