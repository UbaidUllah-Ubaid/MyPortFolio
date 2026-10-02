import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Service } from '../service/service';
import { Projects } from '../projects/projects';
import { Footer } from '../footer/footer';

@Component({
  imports: [Home, About, Service, Projects, Footer],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {}
