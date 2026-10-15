import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Language, LanguageService } from '../language.service';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslatePipe],
  host: { '(document:keydown.escape)': 'open.set(false)' },
  template: `
    <!-- Butoni me flamurin aktual -->
    <button type="button" class="trigger" aria-label="Select language" (click)="open.set(true)">
      <span [class]="'fi fi-' + lang.current().flag"></span>
      <span class="code">{{ lang.current().lang.toUpperCase() }}</span>
    </button>

    <!-- Dritarja për zgjedhjen e gjuhës -->
    @if (open()) {
      <div class="overlay" (click)="open.set(false)">
        <div class="panel" role="dialog" aria-modal="true" (click)="$event.stopPropagation()">
          <div class="panel-head">
            <h2>{{ 'LANGUAGE.TITLE' | translate }}</h2>
            <button type="button" class="close" aria-label="Close" (click)="open.set(false)">
              ×
            </button>
          </div>

          <div class="grid">
            @for (l of lang.all; track l.code) {
              <button
                type="button"
                class="item"
                [class.active]="l.code === lang.current().code"
                (click)="pick(l)"
              >
                <span [class]="'fi fi-' + l.flag"></span>
                <span>{{ l.name }}</span>
              </button>
            }
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    .trigger {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.75rem;
      border: 1px solid rgba(127, 178, 58, 0.6);
      border-radius: 999px;
      background: transparent;
      color: #f5f3ea;
      font: inherit;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s;
    }
    .trigger:hover {
      background: rgba(127, 178, 58, 0.16);
      border-color: var(--green);
    }
    .code {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.14em;
    }

    .overlay {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 6rem 1rem 1rem;
      background: rgba(10, 22, 15, 0.7);
      backdrop-filter: blur(3px);
    }
    .panel {
      width: 100%;
      max-width: 400px;
      padding: 1.2rem 1.6rem 1.6rem;
      background: var(--paper);
      color: var(--text);
      border-top: 3px solid var(--green);
      border-radius: 8px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
    }
    .panel-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--line);
    }
    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.4rem;
      color: var(--green-dark);
    }
    .close {
      border: none;
      background: none;
      font-size: 2rem;
      line-height: 1;
      color: var(--muted);
      cursor: pointer;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.8rem 0.7rem;
      border: none;
      border-left: 3px solid transparent;
      border-radius: 6px;
      background: none;
      color: inherit;
      font: inherit;
      text-align: start;
      cursor: pointer;
    }
    .item:hover {
      background: #eef3e0;
    }
    .item.active {
      background: #e3efcc;
      border-left-color: var(--green);
      font-weight: 600;
    }
  `,
})
export class LanguageSwitcherComponent {
  lang = inject(LanguageService);
  open = signal(false);

  pick(language: Language) {
    this.lang.set(language);
    this.open.set(false);
  }
}