import { IPhrases } from '../interfaces/phrases.interface';

export const PHRASES: IPhrases[] = [
  {
    phrase: 'Baba is you',
    state: 'passive',
    shouldBeInALine: true,
    position: {
      row: 1,
      column: 1,
    },
  },
  {
    phrase: 'Wall is stop',
    state: 'active',
    shouldBeInALine: false,
    position: {
      row: 0,
      column: 0,
    },
  },
];
