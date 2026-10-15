import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';

import { SITE } from '../site.config';

@Component({
  selector: 'app-contact-page',
  imports: [TranslatePipe],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  site = SITE;

  private query = encodeURIComponent(SITE.mapQuery);

  mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://maps.google.com/maps?q=${this.query}&z=16&output=embed`,
  );

  directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.query}`;
}