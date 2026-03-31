import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: false,
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css',
})
export class TypewriterComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() period: number = 2000;

  displayText = '';
  private loopNum = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private tick() {
    const i = this.loopNum % this.texts.length;
    const fullText = this.texts[i];

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.displayText === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.timeoutId = setTimeout(() => this.tick(), delta);
  }
}
