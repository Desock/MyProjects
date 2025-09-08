import { Component, signal } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
// import { Header } from "./components/header/header";
// import { Content } from './components/content/content';
// import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Welcome, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoPortfolio');
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
