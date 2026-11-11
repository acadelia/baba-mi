import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GridService {
  private positions = new Map<string, { x: number; y: number }>();

  setPositions(data: Record<string, { x: number; y: number }>) {
    Object.entries(data).forEach(([key, value]) => {
      this.positions.set(key, value);
    });
  }

  getPosition(row: number, col: number) {
    return this.positions.get(`${row}-${col}`);
  }
}
