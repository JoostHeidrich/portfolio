import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements OnInit {
  language: string = '';

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((currentLanguage) => {
      this.language = currentLanguage;
    });
  }
}
