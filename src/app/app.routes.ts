import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoutComponent } from './components/notfout/notfout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'about', component: AboutComponent, title: 'About Page' },
  { path: 'projects', component: ProjectsComponent, title: 'Project Page' },
  { path: 'skills', component: SkillsComponent, title: 'Skills Page' },
  { path: 'education', component: EducationComponent, title: 'Education Page' },
  { path: 'contact', component: ContactComponent, title: 'Contact Page' },
  { path: '**', component: NotfoutComponent, title: 'NotFound Page' },
];
