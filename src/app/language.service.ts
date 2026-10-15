import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string; // identifikuesi, p.sh. 'sq'
  lang: string; // skedari i përkthimit: public/i18n/<lang>.json
  name: string; // emri i gjuhës
  flag: string; // kodi i flamurit (flag-icons)
}

// Gjuhët e faqes. Për të shtuar një gjuhë të re: shto një rresht këtu
// dhe krijo skedarin përkatës te public/i18n/ (p.sh. it.json)
export const LANGUAGES: Language[] = [
  { code: 'sq', lang: 'sq', name: 'Shqip', flag: 'al' },
  { code: 'en', lang: 'en', name: 'English', flag: 'gb' },
];

const STORAGE_KEY = 'flovis-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);

  readonly all = LANGUAGES;
  readonly current = signal<Language>(this.saved());

  constructor() {
    this.apply(this.current());
  }

  isAvailable(language: Language): boolean {
    return LANGUAGES.some((l) => l.code === language.code);
  }

  set(language: Language) {
    this.current.set(language);
    this.apply(language);
    try {
      localStorage.setItem(STORAGE_KEY, language.code); // e kujton për herën tjetër
    } catch {
      // nëse browseri s'e lejon, gjuha vlen vetëm për këtë vizitë
    }
  }

  private apply(language: Language) {
    this.translate.use(language.lang);
    document.documentElement.lang = language.code;
  }

  private saved(): Language {
    try {
      const code = localStorage.getItem(STORAGE_KEY);
      return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
    } catch {
      return LANGUAGES[0];
    }
  }
}