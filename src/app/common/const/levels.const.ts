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
      column: 2,
    },
    grid: [
      [0, 0, 0, 0],
      [0, 0, 0],
      [0, 0, 0, 0],
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
  },
];
