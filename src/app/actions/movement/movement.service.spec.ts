import { TestBed } from '@angular/core/testing';

import { MovementService } from './movement.service';

describe('MovementService', () => {
  let service: MovementService;
  const arrowRightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
  const arrowLeftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
  const arrowUpEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
  const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
  const grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  beforeEach(() => {
    service = TestBed.inject(MovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.each([
    { event: arrowDownEvent, row: 2, column: 0, expectedRow: 2, expectedColumn: 0 },
    { event: arrowDownEvent, row: 0, column: 0, expectedRow: 1, expectedColumn: 0 },
    { event: arrowUpEvent, row: 0, column: 0, expectedRow: 0, expectedColumn: 0 },
    { event: arrowUpEvent, row: 2, column: 0, expectedRow: 1, expectedColumn: 0 },
    { event: arrowLeftEvent, row: 0, column: 0, expectedRow: 0, expectedColumn: 0 },
    { event: arrowLeftEvent, row: 0, column: 2, expectedRow: 0, expectedColumn: 1 },
    { event: arrowRightEvent, row: 0, column: 2, expectedRow: 0, expectedColumn: 2 },
    { event: arrowRightEvent, row: 0, column: 0, expectedRow: 0, expectedColumn: 1 },
  ])('moves correctly for $event.key', ({ event, row, column, expectedRow, expectedColumn }) => {
    const result = service.pathTraverse(grid, row, column, event);

    expect(result.row).toBe(expectedRow);
    expect(result.column).toBe(expectedColumn);
  });
});
