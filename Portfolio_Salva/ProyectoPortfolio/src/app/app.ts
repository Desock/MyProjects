import { Component, signal } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  protected readonly title = signal('Salvador Gomez Risen Portfolio');

  constructor(public router: Router) {
  }


  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }

}
