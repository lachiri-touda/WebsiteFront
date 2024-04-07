import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mobileMode: boolean =false;

  constructor(
  ) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 900) {
      this.mobileMode = true;
    } else {
      this.mobileMode = false;
    }
  }
  
}
