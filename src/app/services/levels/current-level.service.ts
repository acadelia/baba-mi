import { computed, effect, Injectable, signal } from '@angular/core';
import { LEVELS } from '../../common/const/levels.const';

@Injectable({
  providedIn: 'root',
})
export class CurrentLevelService {
  private readonly CURRENT_LEVEL_STORAGE_KEY = 'currentLevel';

  currentLevel = signal<number>(this.loadLevel());

  playerPosition = signal<{ row: number; column: number }>(
    this.getInitialPosition(this.loadLevel()),
  );

  levelData = computed(() => LEVELS.find((l) => l.level === this.currentLevel())!);

  grid = computed(() => this.levelData().grid);
  flagPosition = computed(() => this.levelData().flagPosition);

  constructor() {
    effect(() => {
      localStorage.setItem(this.CURRENT_LEVEL_STORAGE_KEY, this.currentLevel().toString());
    });
  }

  movePlayer(newPosition: { row: number; column: number }) {
    this.playerPosition.set(newPosition);
  }

  private loadLevel(): number {
    const saved = localStorage.getItem(this.CURRENT_LEVEL_STORAGE_KEY);
    return saved ? Number(saved) : 1;
  }

  private getInitialPosition(level: number) {
    return LEVELS.find((l) => l.level === level)?.startPosition ?? { row: 0, column: 0 };
  }

  nextLevel() {
    const next = this.currentLevel() + 1;
    if (LEVELS.find((l) => l.level === next)) {
      this.currentLevel.set(next);
      this.playerPosition.set(this.getInitialPosition(next));
    } else {
      this.currentLevel.set(1);
    }
  }
}
