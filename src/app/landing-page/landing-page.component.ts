import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { AppComponent } from '../app.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, AppComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-page.media.component.scss',
  ],
})
export class LandingPageComponent implements OnInit {
  language: string = '';

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((currentLanguage) => {
      this.language = currentLanguage;
    });
  }
}
