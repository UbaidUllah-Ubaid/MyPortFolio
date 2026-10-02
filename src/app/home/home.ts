import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private roles = ['Front-End Developer', 'Angular Learner', 'Bootstrap Enthusiast'];
  displayText = signal('');

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private tick(): void {
    const word = this.roles[this.roleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.displayText.set(word.slice(0, this.charIndex));

      if (this.charIndex === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 1500);
        return;
      }
    } else {
      this.charIndex--;
      this.displayText.set(word.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.timer = setTimeout(() => this.tick(), this.deleting ? 35 : 75);
  }
}