import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Theme } from '../../services/theme';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private theme = inject(Theme)
  currentTheme: String = 'auto';
  
  constructor (private translate: TranslateService) {
  }

  ngOnInit() : void {
    this.currentTheme = this.theme.getCurrentTheme();
  }

  changeTheme(theme: 'light' | 'dark' | 'auto') {
    this.theme.setTheme(theme);
    this.currentTheme = theme;
  }

 switchLang(lang: string) {
    this.translate.use(lang);
  }
}
