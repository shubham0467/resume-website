import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../enviroments/enviroment';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  loading = true;
  totalVisitors = 0;
  totalPageViews = 0;
  topPage = '';
  topCountry = '';
  pageStats: { label: string; count: number; pct: number }[] = [];
  browserStats: { label: string; count: number; pct: number }[] = [];
  countryStats: { label: string; count: number; pct: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(`${environment.API_URL}/analytics`).subscribe(data => {
      this.totalVisitors = data.totalVisitors;
      this.totalPageViews = data.visits.length;
      this.pageStats = this.toStats(data.visits, 'page');
      this.browserStats = this.toStats(data.visits, 'browser');
      this.countryStats = this.toStats(data.visits, 'country');
      this.topPage = this.pageStats[0]?.label ?? '-';
      this.topCountry = this.countryStats[0]?.label ?? '-';
      this.loading = false;
    });
  }

  private pageNameMap: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/skills': 'Skills',
    '/experience': 'Experience',
    '/projects': 'Projects',
    '/contact': 'Contact',
    '/analytics': 'Analytics',
    '/chatbot': 'Chatbot',
    '/admin-login': 'Admin Login'
  };

  private toStats(visits: any[], key: string) {
    const counts: Record<string, number> = {};
    visits.forEach(v => {
      const raw = v[key];
      const label = key === 'page' ? (this.pageNameMap[raw] ?? raw) : raw;
      counts[label] = (counts[label] || 0) + 1;
    });
    const max = Math.max(...Object.values(counts));
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ label, count, pct: Math.round((count / max) * 100) }));
  }
}