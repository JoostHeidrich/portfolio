import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  language: string = '';

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((currentLanguage) => {
      this.language = currentLanguage;
    });
  }

  toggleMenu() {
    let content = document.getElementById('menu');
    let navscreen = document.getElementById('navscreen');
    if (!content?.classList.contains('opened')) {
      content?.classList.add('opened');
      navscreen?.classList.remove('d-none');
    } else {
      content?.classList.remove('opened');
      navscreen?.classList.add('d-none');
    }
  }
}
