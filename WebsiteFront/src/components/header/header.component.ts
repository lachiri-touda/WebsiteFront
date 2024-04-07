import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSection: string = '';
  isSideNavOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentSection();
        window.scrollTo(0, 0);
      }
    });
  }

  private updateCurrentSection(): void {
    const currentUrl = this.router.url;
    this.currentSection = currentUrl.split('/')[1] || 'home';
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSideNav() {
    this.isSideNavOpen = false;
  }
  
}
