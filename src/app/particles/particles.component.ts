import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      let particlesArray: any[] = [];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 3 + 1;
          // downward drift to mimic falling snow
          this.speedX = Math.random() * 0.5 - 0.25;
          this.speedY = Math.random() * 1 + 0.5;
          this.color = `rgba(255,255,255,${Math.random()})`;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y > canvas.height) this.y = 0;
        }
        draw() {
          ctx!.fillStyle = this.color;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      function init() {
        particlesArray = [];
        for (let i = 0; i < 60; i++) {
          particlesArray.push(new Particle());
        }
      }
      init();

      function animate() {
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => {
          p.update();
          p.draw();
        });
        requestAnimationFrame(animate);
      }
      animate();

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        init();
      });
    }
  }
}
