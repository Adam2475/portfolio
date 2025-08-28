import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { ElementRef, HostListener, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
   standalone: true, 
  imports: [Header, Footer, About, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  isScrolledOverProjects: boolean = false;
}
