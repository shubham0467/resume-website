import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ParticlesComponent } from './particles/particles.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, ParticlesComponent, ChatbotComponent],
  template: `
    <app-particles></app-particles>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-chatbot></app-chatbot>
  `
})
export class AppComponent {
  title = 'resume-website';
}