import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  desc: string;
}

@Component({
  imports: [],
  selector: 'app-service',
  styleUrl: './service.css',
  templateUrl: './service.html',
})
export class Service {
  services: ServiceItem[] = [
    { title: 'Web Pages', desc: 'HTML, CSS aur JavaScript se clean, responsive pages.' },
    { title: 'Bootstrap UI', desc: 'Bootstrap components aur grid ke sath fast layouts.' },
    { title: 'Angular Apps', desc: 'Component-based, reusable Angular applications.' },
  ];

}
