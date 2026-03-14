import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-analytics', component: AdminAnalyticsComponent, canActivate: [authGuard] }
];
