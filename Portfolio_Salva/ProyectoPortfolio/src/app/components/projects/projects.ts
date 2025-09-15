import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-projects',
  imports: [Header, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
