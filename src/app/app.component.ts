import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { ParticlesComponent } from './particles/particles.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    ParticlesComponent,
    ChatbotComponent
  ],
  template: `
    <app-particles></app-particles>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-chatbot></app-chatbot>
  `
})
export class AppComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      this.router.events.subscribe(event => {

        if (event instanceof NavigationEnd) {

          const page = event.urlAfterRedirects;

          // Skip admin analytics page
          if (!page.includes("admin-analytics")) {

            this.http.post("https://backend-resume-website.onrender.com/track-visit", {
              page: page
            }).subscribe();

          }

        }

      });

    }

  }

}