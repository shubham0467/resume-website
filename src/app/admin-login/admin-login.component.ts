import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-icon">🔐</div>
        <h2>Admin Access</h2>
        <p class="subtitle">Enter your password to continue</p>
        <div class="input-wrapper">
          <span>🔑</span>
          <input type="password" [(ngModel)]="password" placeholder="Password" (keyup.enter)="login()" />
        </div>
        <button (click)="login()">Login</button>
        <span class="error" *ngIf="error">⚠️ {{ error }}</span>
      </div>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; font-family: 'Poppins', sans-serif; }
    .login-container {
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      background-size: 300% 300%;
      animation: gradientShift 6s ease infinite;
    }
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .login-card {
      background: rgba(255,255,255,0.97);
      padding: 48px 40px;
      border-radius: 24px;
      box-shadow: 0 32px 80px rgba(0,0,0,0.2);
      display: flex; flex-direction: column; align-items: center;
      gap: 16px; width: 360px;
      animation: cardIn 0.4s ease;
    }
    @keyframes cardIn {
      from { opacity:0; transform: translateY(24px); }
      to   { opacity:1; transform: translateY(0); }
    }
    .login-icon { font-size: 3rem; line-height: 1; }
    h2 { margin: 0; font-size: 1.7rem; font-weight: 700; background: linear-gradient(135deg,#667eea,#764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .subtitle { margin: 0; color: #94a3b8; font-size: 0.88rem; }
    .input-wrapper { width: 100%; position: relative; }
    .input-wrapper span { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 1rem; }
    input {
      width: 100%; padding: 13px 14px 13px 40px;
      border: 1.5px solid #e2e8f0; border-radius: 10px;
      font-size: 0.95rem; outline: none;
      transition: border 0.2s, box-shadow 0.2s;
    }
    input:focus { border-color: #667eea; box-shadow: 0 0 0 3px rgba(102,126,234,0.15); }
    button {
      width: 100%; padding: 13px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white; border: none; border-radius: 10px;
      font-size: 1rem; font-weight: 600; cursor: pointer;
      box-shadow: 0 6px 20px rgba(102,126,234,0.45);
      transition: transform 0.15s, box-shadow 0.15s;
    }
    button:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(102,126,234,0.55); }
    .error { color: #e53e3e; font-size: 0.84rem; font-weight: 500; }
  `]
})
export class AdminLoginComponent {
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/admin-analytics']);
    } else {
      this.error = 'Incorrect password';
    }
  }
}
