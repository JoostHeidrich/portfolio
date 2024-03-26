import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  language: string = '';

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((currentLanguage) => {
      this.language = currentLanguage;
    });
  }
}
