import { EVABaseComponent } from '../../utils/base-component';
import { i18n } from '../../i18n/i18n-service';

type LocaleInfo = {
  code: string;
  label: string; // Native name + region
  langPrefix: string; // URL prefix, e.g., en, fr, es, cy, mi
};

const LOCALE_LABELS: Record<string, string> = {
  'en-CA': 'English (Canada)',
  'fr-CA': 'Français (Canada)',
  'en-US': 'English (United States)',
  'es-US': 'Español (Estados Unidos)',
  'en-GB': 'English (United Kingdom)',
  'cy-GB': 'Cymraeg (Cymru)',
  'en-AU': 'English (Australia)',
  'en-NZ': 'English (New Zealand)',
  'mi-NZ': 'Te Reo Māori (Aotearoa)'
};

function toLangPrefix(locale: string): string {
  return (locale.split('-')[0] || 'en').toLowerCase();
}

export class EVAGCLanguageSwitcher extends EVABaseComponent {
  private open = false;
  private locales: LocaleInfo[] = [];

  static get observedAttributes() {
    return ['include', 'url-mode'];
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Prepare locales
    const avail = i18n.getAvailableLocales();
    const includeAttr = this.getAttribute('include');
    const include = includeAttr ? includeAttr.split(',').map(s => s.trim()) : avail;
    this.locales = include
      .filter(code => avail.includes(code))
      .map(code => ({ code, label: LOCALE_LABELS[code] || code, langPrefix: toLangPrefix(code) }));

    // Close menu on outside click
    document.addEventListener('click', this.handleOutside, true);
    this.render();
  }

  disconnectedCallback(): void {
    document.removeEventListener('click', this.handleOutside, true);
    super.disconnectedCallback();
  }

  private handleOutside = (e: Event) => {
    if (!this.open) return;
    if (!this.contains(e.target as Node)) {
      this.open = false;
      this.render();
    }
  };

  private async onSelect(code: string) {
    await i18n.setLocale(code);
    const mode = this.getAttribute('url-mode') || 'prefix';
    if (mode === 'prefix') {
      const prefix = toLangPrefix(code);
      const rest = window.location.pathname.replace(/^\/(en|fr|es|cy|mi)\//, '/');
      const nextPath = `/${prefix}${rest.startsWith('/') ? '' : '/'}${rest}`;
      if (nextPath !== window.location.pathname) {
        window.location.assign(nextPath);
        return;
      }
    }
    this.dispatchEvent(new CustomEvent('locale-change', { detail: { locale: code }, bubbles: true }));
    this.open = false;
    this.render();
  }

  protected render(): void {
    const current = i18n.getLocale();
    const currentLabel = LOCALE_LABELS[current] || current;
    this.shadow.innerHTML = '';

    const style = document.createElement('style');
    style.textContent = `
      :host { display: inline-block; position: relative; }
      button.trigger {
        display: inline-flex; align-items: center; gap: .5rem;
        border: 1px solid transparent; border-radius: 6px; padding: .5rem .75rem;
        background: var(--eva-surface, #fff); color: var(--eva-text, #111);
        cursor: pointer; font: inherit;
      }
      button.trigger:focus-visible { outline: 3px solid var(--eva-ring, #2b8a3e); outline-offset: 3px; }
      .menu { position: absolute; top: calc(100% + 4px); right: 0; min-width: 220px;
        background: var(--eva-surface, #fff); color: var(--eva-text, #111); border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,.08); }
      .menu[hidden] { display: none; }
      .menu ul { list-style: none; margin: 0; padding: .25rem; }
      .menu li { margin: 0; }
      .menu button.item { width: 100%; text-align: left; background: transparent; border: 0; padding: .5rem .5rem; border-radius: 6px; cursor: pointer; }
      .menu button.item:hover, .menu button.item:focus { background: rgba(0,0,0,.06); }
      .check { margin-left: auto; opacity: .7; }
    `;
    this.shadow.appendChild(style);

    const trigger = document.createElement('button');
    trigger.className = 'trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    trigger.innerHTML = `<span>${currentLabel}</span>`;
    trigger.onclick = () => { this.open = !this.open; this.render(); };
    trigger.onkeydown = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); this.open = true; this.render(); (this.shadow.querySelector('.menu button.item') as HTMLButtonElement)?.focus(); }
    };
    this.shadow.appendChild(trigger);

    // Link button and menu for accessible name/labeling
    const triggerId = this.getAttribute('id') ? `${this.getAttribute('id')}-trigger` : `eva-lang-trigger-${Math.random().toString(36).slice(2)}`;
    trigger.id = triggerId;

    const menu = document.createElement('div');
    menu.className = 'menu';
    if (!this.open) menu.setAttribute('hidden', '');
    // Use ARIA menu pattern for simpler compliance
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-labelledby', triggerId);
    const ul = document.createElement('ul');
    ul.setAttribute('role', 'none');
    for (const loc of this.locales) {
      const li = document.createElement('li');
      li.setAttribute('role', 'none');
      const b = document.createElement('button');
      b.className = 'item';
      b.type = 'button';
      // Menuitemradio to indicate current selection
      b.setAttribute('role', 'menuitemradio');
      b.setAttribute('aria-checked', String(loc.code === current));
      b.innerHTML = `<span>${loc.label}</span>${loc.code === current ? '<span class="check">✓</span>' : ''}`;
      b.onclick = () => this.onSelect(loc.code);
      b.onkeydown = (e) => {
        const items = Array.from(this.shadow.querySelectorAll('.menu button.item')) as HTMLButtonElement[];
        const idx = items.indexOf(b);
        if (e.key === 'ArrowDown') { e.preventDefault(); (items[idx + 1] || items[0]).focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); (items[idx - 1] || items[items.length - 1]).focus(); }
        if (e.key === 'Escape') { e.preventDefault(); this.open = false; this.render(); trigger.focus(); }
      };
      li.appendChild(b);
      ul.appendChild(li);
    }
    menu.appendChild(ul);
    this.shadow.appendChild(menu);
  }
}

customElements.define('eva-gc-language-switcher', EVAGCLanguageSwitcher);
