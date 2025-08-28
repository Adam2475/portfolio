import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
   @Input() isScrolled: boolean = false;
}
