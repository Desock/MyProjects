import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-education',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

}
