import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {
  private languageSubject: BehaviorSubject<string>;
  public language$;

  constructor() {
    this.languageSubject = new BehaviorSubject<string>('german');
    this.language$ = this.languageSubject.asObservable();
  }

  public get language(): string {
    return this.languageSubject.value;
  }

  changeLanguage() {
    if (this.language === 'english') {
      this.languageSubject.next('german');
    } else if (this.language === 'german') {
      this.languageSubject.next('english');
    }
  }
}
