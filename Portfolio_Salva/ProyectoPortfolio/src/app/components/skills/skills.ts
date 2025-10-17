import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { Arrow } from '../arrow/arrow';

@Component({
  selector: 'app-skills',
  imports: [Header, Footer, TranslatePipe, Arrow],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

}
