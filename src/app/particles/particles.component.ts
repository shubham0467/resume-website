import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})

export class ParticlesComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
function getPhotoCenter() {

  const photo = document.querySelector(".hero-image img") as HTMLImageElement | null;
  if (!photo) return null;

  const rect = photo.getBoundingClientRect();

  return {
    x: rect.left - canvasRect.left + rect.width / 2,
    y: rect.top - canvasRect.top + rect.height / 2,
    radius: rect.width / 2 + 80
  };

}
const canvasRect = canvas.getBoundingClientRect();

    let particlesArray: any[] = [];
    let starsArray: any[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const leafColors = [
      "#ff7f50",
      "#ffb347",
      "#d2691e",
      "#b5651d",
      "#e9967a"
    ];

    function isDarkMode() {
      return document.body.classList.contains("dark");
    }

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });


    // ⭐ STAR CLASS
    class Star {

      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.02;
      }

      update() {
        this.opacity += this.speed;

        if (this.opacity > 1 || this.opacity < 0.2) {
          this.speed = -this.speed;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

    }


    // ❄️ / 🍂 PARTICLE CLASS
    class Particle {

      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      angle: number;
      rotationSpeed: number;

      constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 1 + 0.5;

        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;

        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
      }

      update() {

        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;
        


        // 🍃 Wind sway in day mode
        if (!isDarkMode()) {
          this.x += Math.sin(this.y * 0.01) * 0.4;
        }


        // 🖱 Mouse interaction
        if (mouse.x && mouse.y) {

          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;

          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {

            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;

            let force = (mouse.radius - distance) / mouse.radius;

            let directionX = forceDirectionX * force * 2;
            let directionY = forceDirectionY * force * 2;

            this.x -= directionX;
            this.y -= directionY;

          }

        }


        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
      const photoArea = getPhotoCenter();

if (photoArea) {

  let dx = this.x - photoArea.x;
  let dy = this.y - photoArea.y;

  let dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < photoArea.radius && dist > 0) {

    let nx = dx / dist;
    let ny = dy / dist;

    let force = (photoArea.radius - dist) / photoArea.radius;

    this.x += nx * force * 3;
    this.y += ny * force * 3;

    const swirl = 0.4;

    this.x += -ny * swirl;
    this.y += nx * swirl;
  }
}
     
      }


      draw() {

        if (isDarkMode()) {

          // ❄️ Snow
          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

        }

        else {

          // 🍂 Leaf
          ctx.save();

          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);

          ctx.fillStyle = this.color;

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(6, -10, 12, 0);
          ctx.quadraticCurveTo(6, 10, 0, 0);
          ctx.fill();

          ctx.restore();

        }

      }

    }


    // 🌠 Shooting Star
    class ShootingStar {

      x!: number;
      y!: number;
      length!: number;
      speed!: number;
      angle!: number;
      opacity!: number;

      constructor() {
        this.reset();
      }

      reset() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;

        this.length = Math.random() * 80 + 80;
        this.speed = Math.random() * 10 + 6;

        this.angle = Math.PI / 4;

        this.opacity = 1;

      }

      update() {

        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

        this.opacity -= 0.02;

        if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }

      }

      draw() {

        ctx.shadowColor = "white";
        ctx.shadowBlur = 10;

        ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(this.x, this.y);

        ctx.lineTo(
          this.x - this.length * Math.cos(this.angle),
          this.y - this.length * Math.sin(this.angle)
        );

        ctx.stroke();

        ctx.shadowBlur = 0;

      }

    }


    let shootingStar = new ShootingStar();
    let nextMeteorTime = Date.now() + 6000;


    // INIT
    function init() {

      particlesArray = [];
      starsArray = [];

      for (let i = 0; i < 80; i++) {
        particlesArray.push(new Particle());
      }

      for (let i = 0; i < 60; i++) {
        starsArray.push(new Star());
      }

    }

    init();


    // ANIMATION LOOP
    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);


      // ⭐ Night effects
      if (isDarkMode()) {

        starsArray.forEach(star => {
          star.update();
          star.draw();
        });

        const now = Date.now();

        if (now > nextMeteorTime) {
          shootingStar.update();
          shootingStar.draw();
        }

        if (shootingStar.opacity <= 0) {
          nextMeteorTime = now + (Math.random() * 4000 + 6000);
        }

      }
     

      // ❄️ Snow / 🍂 Leaves
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);

    }

    animate();


    // Resize
    window.addEventListener("resize", () => {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();

    });


    // Detect theme change
    const observer = new MutationObserver(() => {
      init();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });

  }
}