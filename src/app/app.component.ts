import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialsComponent } from './socials/socials.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LandingPageComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    AboutMeComponent,
    SocialsComponent,
    MySkillsComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
