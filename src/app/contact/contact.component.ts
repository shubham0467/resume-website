import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  isSending = false;

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

    /* Local backend */
    const apiUrl = 'http://localhost:3000/contact';

    this.http.post(apiUrl, this.contactForm.value).subscribe({

      next: () => {

        alert('Message sent successfully!');
        this.contactForm.reset();
        this.isSending = false;

      },

      error: () => {

        alert('Error sending message');
        this.isSending = false;

      }

    });

  }

}