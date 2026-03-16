import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../enviroments/enviroment';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  isSending = false;
  isError = false;
  isSuccess = false;
  dialogMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

  }

  onSubmit() {

    if (!this.contactForm.valid) return;

    this.isSending = true;
    this.isError = false;
    this.isSuccess = false;



    /* Local backend */
    const apiUrl = `${environment.API_URL}/contact`;

    this.http.post(apiUrl, this.contactForm.value).subscribe({

      next: () => {

        this.contactForm.reset();
        this.isSending = false;
        this.isSuccess = true;
        this.dialogMessage = 'Message sent successfully!';

      },
      error: (err) => {
        this.isSending = false;
        this.isError = true;
        this.dialogMessage = err?.error?.message || 'Failed to send message. Please try again!';
      }

    });

  }
  closeDialog() {
    this.isError = false;
    this.isSuccess = false;

  }
}