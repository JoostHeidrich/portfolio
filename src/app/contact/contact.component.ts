import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };
  checkboxChecked: boolean = false;
  sendFailed = false;
  messageSend = false;

  post = {
    endPoint: 'https://joostheidrich.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.messageSend = false;
    if (ngForm.submitted && ngForm.form.valid && this.checkboxChecked) {
      console.log('send');
      this.messageSend = true;
      this.sendFailed = false;
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.mailSend(),
        });
    } else {
      this.sendFailed = true;
    }
  }

  mailSend() {}
}
