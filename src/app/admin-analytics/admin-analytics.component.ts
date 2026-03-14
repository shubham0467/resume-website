import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-analytics.component.html',
  styleUrls: ['./admin-analytics.component.css']
})
export class AdminAnalyticsComponent implements OnInit {

  totalVisitors = 0;
  visits: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {

    this.http.get<any>(
      "http://localhost:3000/admin-analytics?password=admin123"
    )
    .subscribe(data => {

      this.totalVisitors = data.totalVisitors;
      this.visits = data.visits;

    });

  }

  logout() {

    localStorage.removeItem('isAdmin');
    this.router.navigate(['/admin-login']);

  }

}