import { Component } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  link?: string;
}

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
    projects: Project[] = [
    { title: 'Project One', desc: 'Yahan apne project ki short detail likho 1.', link: '#' },
    { title: 'Project Two', desc: 'Yahan apne project ki short detail likho.', link: '#' },
    { title: 'Project Three', desc: 'Yahan apne project ki short detail likho.', link: '#' },
    // { title: 'Project Three', desc: 'Yahan apne project ki short detail likho.', link: '#' },
    { title: 'Project Four', desc: 'Yahan apne project ki short detail likho.', link: '#' },
    { title: 'Project Five', desc: 'Yahan apne project ki short detail likho.', link: '#' },
  ];
}

