import { Component, input } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private appComponent: AppComponent) {}
  language = this.appComponent.language;
}
