import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-arrow',
  imports: [],
  templateUrl: './arrow.html',
  styleUrl: './arrow.css'
})
export class Arrow {
  visible = false;

  @HostListener('window:scroll')
    onScroll() : void {
      this.visible = window.scrollY > 200;
    }

    scrollToTop() : void {
      window.scrollTo({top : 0, behavior: 'smooth'});
    }
}
