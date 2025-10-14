import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

}
