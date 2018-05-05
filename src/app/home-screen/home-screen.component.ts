import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

const urlHomeScreen: string[] = ['/', '/home-screen'];

@Component({
  selector: 'rb-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit{

  isVisible: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.toggleVisible();
  }

  toggleVisible() {
    if (urlHomeScreen.indexOf(this.router.url) === -1) {
      this.isVisible = false;
    }
    this.router.events.filter(
      (event) => event instanceof NavigationEnd)
      .subscribe(
        (event: NavigationEnd) => {
          if (urlHomeScreen.indexOf(event.url) === -1) {
            this.isVisible = false;
          } else {
            this.isVisible = true;
          }
        }
      );
  }

}
