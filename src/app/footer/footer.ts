import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SITE } from '../site.config';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  site = SITE;
  year = new Date().getFullYear();
}