import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SocialsComponent } from '../socials/socials.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  imports: [
    HeaderComponent,
    LandingPageComponent,
    SocialsComponent,
    AboutMeComponent,
    MySkillsComponent,
    ContactComponent,
    PortfolioComponent,
  ],
})
export class MainContentComponent {
}
