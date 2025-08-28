import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel-component/carousel-component';
import { ElementRef, HostListener, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CarouselComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  @ViewChild('projects', { static: false }) projectsSection!: ElementRef;

  @Output() scrolledOver = new EventEmitter<boolean>();

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.projectsSection) return;

    const projectsTop = this.projectsSection.nativeElement.getBoundingClientRect().top;
    const headerHeight = 80;
    const isScrolled = projectsTop <= headerHeight;

    console.log(`projectsTop: ${projectsTop}, isScrolled: ${isScrolled}`);
    this.scrolledOver.emit(isScrolled);
  }
}