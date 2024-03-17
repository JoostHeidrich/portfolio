import { Component, Output, input } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private appComponent: AppComponent) {}
  language = this.appComponent.language;

  changeLanguage() {
    if (this.language === 'english') {
      this.language = 'german';
    } else if (this.language === 'german') {
      this.language = 'english';
    }
    this.appComponent.language = this.language;
    console.log(this.appComponent.language);
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
