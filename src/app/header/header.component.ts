import { Component } from "@angular/core";

// We use two words separated with a - for the selecctor title to ensure that we don't clash or overwrite any default components in angular
@Component({
    selector: 'app-header',
    standalone: true, 
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {}