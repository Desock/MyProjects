import { Routes } from '@angular/router';
import { Profile } from './components/profile/profile';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Welcome } from './components/welcome/welcome';

export const routes: Routes = [
    { path: 'welcome', component: Welcome},
    { path: 'profile', component: Profile },
    { path: 'experience', component: Experience },
    { path: 'projects', component: Projects },
    { path: 'education', component: Education }
];
