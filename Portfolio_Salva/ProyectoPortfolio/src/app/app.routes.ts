import { Routes } from '@angular/router';
import { Profile } from './components/profile/profile';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Welcome } from './components/welcome/welcome';
import { Skills } from './components/skills/skills';

export const routes: Routes = [
    { path: '', component: Welcome},
    { path: 'profile', component: Profile },
    { path: 'experience', component: Experience },
    { path: 'projects', component: Projects },
    { path: 'education', component: Education },
    { path: 'skills', component: Skills },
    { path: '**', redirectTo: 'profile', pathMatch: 'full' }
];
