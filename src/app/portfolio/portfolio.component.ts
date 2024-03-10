import { Component } from '@angular/core';
import AOS from 'aos';
import { first } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor() {}
  ngOnInit() {
    AOS.init({
      duration: 2000,
    });
  }
}
