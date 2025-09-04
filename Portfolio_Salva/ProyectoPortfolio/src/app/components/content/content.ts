import { Component } from '@angular/core';
import { Profile } from '../profile/profile';
import { Education } from '../education/education';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Experience } from '../experience/experience';


@Component({
  selector: 'app-content',
  imports: [Profile, Education, Projects, Skills, Experience ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
