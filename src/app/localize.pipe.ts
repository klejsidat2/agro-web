import { Pipe, PipeTransform, inject } from '@angular/core';

import { LanguageService } from './language.service';
import { Localized } from './models';

// Përdorimi: {{ product.description | loc }} → teksti në gjuhën aktuale
@Pipe({ name: 'loc', pure: false })
export class LocalizePipe implements PipeTransform {
  private language = inject(LanguageService);

  transform(value: Localized | null | undefined): string {
    if (!value) return '';
    const english = this.language.current().lang === 'en';
    // nëse mungon anglishtja, merret shqipja
    return english && value.en ? value.en : value.sq;
  }
}