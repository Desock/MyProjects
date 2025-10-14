import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-experience',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

}
