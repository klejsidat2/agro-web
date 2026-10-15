import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SITE } from '../site.config';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  site = SITE;
  years = new Date().getFullYear() - SITE.founded;

  // vlerat dërgohen te përkthimet si {{year}}, {{name}}, {{years}}
  params = { year: SITE.founded, name: SITE.name, years: this.years };

  values = ['1', '2', '3'];
}