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
      position: 'Senior Software Engineer',
      duration: 'Oct 2025 - Present',
      location: 'Hyderabad, India',
      description:
        'Leading development of scalable Angular applications and modern frontend architectures for enterprise platforms.',
      details: [
        'Designed and developed scalable Angular-based web applications with modular architecture and reusable components.',
        'Led UI architecture decisions and improved application performance through optimization and efficient state management.',
        'Integrated multiple RESTful APIs and ensured seamless data flow between frontend and backend systems.',
        'Collaborated with backend, QA, and product teams to deliver high-quality features in agile environments.',
        'Mentored junior developers and conducted code reviews to maintain high coding standards.',
        'Improved overall application stability and performance through debugging, optimization, and testing strategies.'
      ],
      skills: ['Angular', 'TypeScript', 'REST APIs', 'Frontend Architecture', 'UI Optimization'],
      icon: '💼',
      expanded: false
    },

    {
      company: 'Tata Elxsi',
      position: 'Software Engineer',
      duration: 'Jul 2023 - Oct 2025',
      location: 'Hyderabad, India',
      description:
        'Developed scalable Angular SPAs, integrated REST APIs, and contributed to embedded virtualization systems using C++ and SystemC.',
      details: [
        'Proficient in C, C++, Java, and Python with strong understanding of Data Structures, Algorithms, and OOP.',
        'Integrated 15+ RESTful APIs using Angular HttpClient improving backend efficiency by 20% and UI rendering by ~30%.',
        'Engineered 5+ scalable SPAs using Angular with modular architecture, reusable components, and lazy loading improving load speed by 30%.',
        'Built cross-platform mobile apps using Flutter and Dart with OAuth2 / JWT authentication and secure token management.',
        'Implemented Provider state management supporting applications with 25+ interactive screens.',
        'Conducted 50+ unit and widget tests achieving over 85% test coverage.',
        'Developed CAN protocol simulation using SystemC improving virtual ECU accuracy by 20%.',
        'Worked on microcontroller-based system design and analyzed multiple hardware datasheets and schematics.',
        'Designed a vehicle gear shift indication system with adaptive brightness control.',
        'Integrated MPU6050 gyroscope sensor for dynamic gear shifting based on vehicle inclination.',
        'Implemented real-time monitoring using UART display and I2C communication with sensors.',
        'Resolved 30+ Git merge conflicts and collaborated across 4 teams while maintaining code quality via Gerrit reviews.'
      ],
      skills: ['Angular', 'Flutter', 'C++', 'SystemC', 'REST APIs', 'JWT', 'Embedded Systems'],
      icon: '🚀',
      expanded: false
    },

    {
      company: 'Baoiam Innovations Pvt Ltd',
      position: 'App Developer Intern',
      duration: 'Nov 2021 - Feb 2022',
      location: 'Noida, India',
      description: 'Developed an educational Flutter application with Firebase authentication.',
      details: [
        'Built mobile app using Flutter and Dart',
        'Implemented login and authentication flows',
        'Integrated Firebase for secure data storage',
        'Improved UI/UX for student learning experience'
      ],
      skills: ['Flutter', 'Dart', 'Firebase'],
      icon: '🎓',
      expanded: false
    }

  ];

  get companyStats(): { company: string; duration: string }[] {
    const map: Record<string, { start: Date; end: Date }> = {};
    this.experiences.forEach(exp => {
      const parts = exp.duration.split(' - ');
      const start = new Date(parts[0]);
      const end = parts[1] === 'Present' ? new Date() : new Date(parts[1]);
      if (!map[exp.company]) {
        map[exp.company] = { start, end };
      } else {
        if (start < map[exp.company].start) map[exp.company].start = start;
        if (end > map[exp.company].end) map[exp.company].end = end;
      }
    });
    return Object.entries(map).map(([company, { start, end }]) => {
      const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      const years = Math.floor(months / 12);
      const rem = months % 12;
      const duration = rem > 0 ? `${years} yrs ${rem} mos` : `${years} yrs`;
      return { company, duration };
    });
  }

  get totalExperience(): string {
    let totalMonths = 0;
    this.experiences.forEach(exp => {
      const parts = exp.duration.split(' - ');
      const start = new Date(parts[0]);
      const end = parts[1] === 'Present' ? new Date() : new Date(parts[1]);
      totalMonths += (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    });
    const years = Math.floor(totalMonths / 12);
    const rem = totalMonths % 12;
    return rem > 0 ? `${years} yrs ${rem} mos` : `${years} yrs`;
  }

  toggleExperience(exp: any) {
    exp.expanded = !exp.expanded;
  }
}