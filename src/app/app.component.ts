import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ParticlesComponent } from './particles/particles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, ParticlesComponent],
  template: `
    <app-particles></app-particles>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'resume-website';
}