import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Theme } from '../../services/theme';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private theme = inject(Theme)
  currentTheme: String = 'auto';

  ngOnInit() : void {
    this.currentTheme = this.theme.getCurrentTheme();
  }

  changeTheme(theme: 'light' | 'dark' | 'auto') {
    this.theme.setTheme(theme);
    this.currentTheme = theme;
  }

  // navbar.component.ts
// changeLanguage(lang: string) {
//   const select = document.querySelector("select.goog-te-combo") as HTMLSelectElement;
//   if (select) {
//     select.value = lang;
//     select.dispatchEvent(new Event("change"));
//   }
// }
}
