import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-component',
  imports: [NgbCarouselModule, CommonModule],
  standalone: true,
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css'
})
export class CarouselComponent {
  images = [
    'test.jpg',
    // 'assets/images/slide2.jpg',
    // 'assets/images/slide3.jpg',
  ];
}
