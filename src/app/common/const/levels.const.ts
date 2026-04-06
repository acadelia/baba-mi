import { ILevel } from '../interfaces/levels.interface';

export const LEVELS: ILevel[] = [
  {
    level: 1,
    startPosition: {
      row: 0,
      column: 0,
    },
    flagPosition: {
      row: 1,
      column: 6,
    },
    grid: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    obstaclesPosition: [
      { row: 0, column: 3 },
      { row: 1, column: 3 },
      { row: 2, column: 3 },
    ],
  },
  {
    level: 2,
    startPosition: {
      row: 1,
      column: 0,
    },
    flagPosition: {
      row: 2,
      column: 2,
    },
    grid: [
      [0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    obstaclesPosition: [{ row: 1, column: 1 }],
  },
];
