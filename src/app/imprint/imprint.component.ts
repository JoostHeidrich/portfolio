import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-imprint',
    standalone: true,
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
    imports: [HeaderComponent]
})
export class ImprintComponent {}
