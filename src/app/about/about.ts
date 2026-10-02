import { Component } from '@angular/core';

interface Skill {
  name: string;
  percent: number;
}

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  skills: Skill[] = [
    { name: 'HTML', percent: 95 },
    { name: 'CSS', percent: 90 },
    { name: 'JavaScript', percent: 80 },
    { name: 'Bootstrap', percent: 90 },
    { name: 'Angular', percent: 65 },
  ];
}
