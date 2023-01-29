import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
    private router: Router,
  ) {
    this.matIconRegistry.addSvgIcon(
    'linkedin-icon',
    this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin.svg')
  )
    this.matIconRegistry.addSvgIcon(
    'medium-icon',
    this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/icons/medium.svg')
  )
  }

  openMedium(): void {
    window.open('https://medium.com/@aurelie.odihe', "_blank")
  }

  openLindekin(): void {
    window.open('https://www.linkedin.com/in/aur%C3%A9lieo/', "_blank")
  }

  copyToClipboard(text: string): void {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }
}
