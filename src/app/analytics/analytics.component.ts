import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  totalVisitors = 0;
  visits: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get<any>("http://localhost:3000/analytics")
      .subscribe(data => {

        this.totalVisitors = data.totalVisitors;
        this.visits = data.visits;

      });

  }

}