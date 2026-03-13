import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
styleUrls: ['./home.component.css']})
export class HomeComponent {

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/shubhampalnew_resume-frontend.pdf';
    link.download = 'Shubham_Pal_Resume.pdf';
    link.click();
  }

}
