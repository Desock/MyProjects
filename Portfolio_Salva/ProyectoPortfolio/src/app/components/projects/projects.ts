import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { Arrow } from '../arrow/arrow';

@Component({
  selector: 'app-projects',
  imports: [Header, Footer, TranslatePipe, Arrow],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
