import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio.media.component.scss'],
})
export class PortfolioComponent implements OnInit {
  language: string = '';

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    });

    this.languageService.language$.subscribe((currentLanguage) => {
      this.language = currentLanguage;
    });
  }
}
