export interface IPhrases {
  phrase: string;
  state: 'active' | 'passive';
  shouldBeInALine: boolean;
  position: {
    row: number;
    column: number;
  };
}
