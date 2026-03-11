import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

 repos = [
  {
    name: "Resume Website",
    description: "Personal developer portfolio website built using Angular, HTML, CSS and TypeScript.",
    url: "https://github.com/shubham0467/resume-website",
    tech: ["Angular", "HTML", "CSS", "TypeScript"]
  },
  {
    name: "Smart Parking System",
    description: "AI-based smart parking system using YOLOv7 and OpenCV to detect parking slot occupancy.",
    url: "https://github.com/shubham0467/smart-parking-system",
    tech: ["Python", "YOLOv7", "OpenCV"]
  },
  {
    name: "BIAOM App",
    description: "Mobile application built using Flutter and Dart for BIAOM platform features.",
    url: "https://github.com/shubham0467/biaom_app",
    tech: ["Flutter", "Dart"]
  },
  {
    name: "BMI Calculator App",
    description: "Mobile application that calculates Body Mass Index using user height and weight.",
    url: "https://github.com/shubham0467/bmi_app",
    tech: ["Flutter", "Dart"]
  },
  
];

}