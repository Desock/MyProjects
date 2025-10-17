import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { Arrow } from '../arrow/arrow';


@Component({
  selector: 'app-experience',
  imports: [Header, Footer, TranslatePipe, Arrow],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

}
