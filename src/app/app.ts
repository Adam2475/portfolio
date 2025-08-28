import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, About, Projects, SwiperModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
