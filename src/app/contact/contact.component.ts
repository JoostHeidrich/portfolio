import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 'contact.media.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public languageService: LanguageService) {}

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
      this.messageSend = true;
      this.sendFailed = false;
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.mailSend();
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

  mailSend() {
    let content = document.getElementById('messageSend');
    content?.classList.remove('d-none');
    setTimeout(() => {
      content?.classList.add('d-none');
    }, 2000);
  }
  language: string = '';

  ngOnInit(): void {
    this.languageService.language$.subscribe((currentLanguage) => {
      this.language = currentLanguage;
    });
  }
}
