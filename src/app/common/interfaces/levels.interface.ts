export interface ILevel {
  level: number;
  startPosition: {
    row: number;
    column: number;
  };
  flagPosition: {
    row: number;
    column: number;
  };
  grid: number[][];
  obstaclesPosition: { row: number; column: number }[];
}
