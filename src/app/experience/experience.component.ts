import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Tata Elxsi',
      position: 'Angular Developer',
      duration: '2022 - Present',
      location: 'Bangalore, India',
      description: 'Developed and maintained Angular web applications. Implemented responsive UI components, integrated APIs, and improved application performance.',
      skills: ['Angular', 'TypeScript', 'REST APIs', 'Material UI'],
      icon: '💼'
    },
    {
      company: 'Tech Startup',
      position: 'Full Stack Developer',
      duration: '2021 - 2022',
      location: 'Remote',
      description: 'Built full-stack web applications using Angular and Spring Boot. Collaborated with cross-functional teams and delivered features on tight deadlines.',
      skills: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      icon: '🚀'
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      duration: '2020 - 2021',
      location: 'Freelance',
      description: 'Developed custom web solutions for clients. Built responsive websites and web applications using modern technologies.',
      skills: ['Angular', 'JavaScript', 'Flutter', 'Responsive Design'],
      icon: '🎨'
    }
  ];
}
