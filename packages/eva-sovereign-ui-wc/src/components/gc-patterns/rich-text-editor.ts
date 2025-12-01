import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/**
 * EVA GC Rich Text Editor Pattern
 * 
 * Accessible rich text editor with bilingual support,
 * formatting toolbar, and WCAG compliance.
 * 
 * @element eva-gc-rich-text-editor
 * 
 * @fires content-change - Dispatched when content changes
 * @fires format-change - Dispatched when formatting is applied
 */
@customElement('eva-gc-rich-text-editor')
export class EvaGCRichTextEditor extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .editor-container {
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      background: white;
    }

    .editor-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      padding: 12px;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
      background: var(--gc-color-background-light, #f5f5f5);
    }

    .toolbar-group {
      display: flex;
      gap: 4px;
      padding: 0 8px;
      border-right: 1px solid var(--gc-color-border-default, #e0e0e0);
    }

    .toolbar-group:last-child {
      border-right: none;
    }

    .toolbar-button {
      width: 36px;
      height: 36px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      background: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gc-color-text-primary, #333333);
      font-weight: 700;
    }

    .toolbar-button:hover {
      background: var(--gc-color-primary-light, #e8f4ff);
      border-color: var(--gc-color-primary, #26374A);
    }

    .toolbar-button:focus-visible {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .toolbar-button.active {
      background: var(--gc-color-primary, #26374A);
      color: white;
      border-color: var(--gc-color-primary, #26374A);
    }

    .toolbar-button svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .toolbar-select {
      height: 36px;
      padding: 0 8px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      background: white;
      cursor: pointer;
      font-family: inherit;
    }

    .toolbar-select:focus-visible {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .editor-content {
      min-height: 300px;
      padding: 20px;
      font-size: 16px;
      line-height: 1.6;
      color: var(--gc-color-text-primary, #333333);
      outline: none;
      overflow-y: auto;
    }

    .editor-content:focus {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: -2px;
    }

    .editor-content:empty:before {
      content: attr(data-placeholder);
      color: var(--gc-color-text-secondary, #666666);
      opacity: 0.6;
    }

    .editor-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border-top: 1px solid var(--gc-color-border-default, #e0e0e0);
      background: var(--gc-color-background-light, #f5f5f5);
      font-size: 12px;
      color: var(--gc-color-text-secondary, #666666);
    }

    .char-count {
      font-weight: 700;
    }

    .char-count.warning {
      color: var(--gc-color-warning, #f57c00);
    }

    .char-count.error {
      color: var(--gc-color-error, #d32f2f);
    }

    .lang-toggle {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .lang-button {
      padding: 4px 12px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      background: white;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 700;
      transition: all 0.2s ease;
    }

    .lang-button:hover {
      background: var(--gc-color-primary-light, #e8f4ff);
    }

    .lang-button.active {
      background: var(--gc-color-primary, #26374A);
      color: white;
      border-color: var(--gc-color-primary, #26374A);
    }

    @media (max-width: 768px) {
      .toolbar-group {
        border-right: none;
        padding: 0;
      }

      .editor-footer {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
    }

    @media print {
      .editor-toolbar,
      .editor-footer {
        display: none;
      }

      .editor-content {
        border: none;
        min-height: auto;
      }
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String, attribute: 'value-fr' })
  valueFr = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: String, attribute: 'placeholder-fr' })
  placeholderFr = '';

  @property({ type: Number, attribute: 'max-length' })
  maxLength = 0;

  @property({ type: Boolean, attribute: 'show-char-count' })
  showCharCount = true;

  @property({ type: Boolean })
  bilingual = true;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @state()
  private currentLang: 'en' | 'fr' = 'en';

  @state()
  private charCount = 0;

  @query('.editor-content')
  private editorElement!: HTMLDivElement;

  override connectedCallback() {
    super.connectedCallback();
    this.currentLang = this.lang;
  }

  override firstUpdated() {
    if (this.value) {
      this.editorElement.innerHTML = this.value;
      this.updateCharCount();
    }
  }

  private execCommand(command: string, value?: string) {
    document.execCommand(command, false, value);
    this.editorElement.focus();
    this.handleContentChange();
    
    this.dispatchEvent(new CustomEvent('format-change', {
      detail: { command, value },
      bubbles: true,
      composed: true
    }));
  }

  private handleContentChange = () => {
    const content = this.editorElement.innerHTML;
    if (this.currentLang === 'en') {
      this.value = content;
    } else {
      this.valueFr = content;
    }
    
    this.updateCharCount();
    
    this.dispatchEvent(new CustomEvent('content-change', {
      detail: { 
        content,
        lang: this.currentLang,
        charCount: this.charCount
      },
      bubbles: true,
      composed: true
    }));
  };

  private updateCharCount() {
    const text = this.editorElement.textContent || '';
    this.charCount = text.length;
  }

  private switchLanguage(lang: 'en' | 'fr') {
    // Save current content
    if (this.currentLang === 'en') {
      this.value = this.editorElement.innerHTML;
    } else {
      this.valueFr = this.editorElement.innerHTML;
    }

    // Switch language
    this.currentLang = lang;

    // Load content for new language
    this.editorElement.innerHTML = lang === 'en' ? this.value : this.valueFr;
    this.updateCharCount();
  }

  private isCommandActive(command: string): boolean {
    return document.queryCommandState(command);
  }

  private get currentPlaceholder(): string {
    if (this.currentLang === 'fr' && this.placeholderFr) {
      return this.placeholderFr;
    }
    return this.placeholder || (this.currentLang === 'fr' ? 'Commencez à écrire...' : 'Start writing...');
  }

  override render() {
    const charCountClass = this.maxLength > 0
      ? this.charCount > this.maxLength ? 'error'
      : this.charCount > this.maxLength * 0.9 ? 'warning'
      : ''
      : '';

    return html`
      <div class="editor-container">
        <div class="editor-toolbar" role="toolbar" aria-label="Formatting toolbar">
          <div class="toolbar-group">
            <select 
              class="toolbar-select"
              @change="${(e: Event) => {
                const select = e.target as HTMLSelectElement;
                this.execCommand('formatBlock', select.value);
                select.value = 'p';
              }}"
              aria-label="Format"
            >
              <option value="p">${this.currentLang === 'fr' ? 'Paragraphe' : 'Paragraph'}</option>
              <option value="h2">${this.currentLang === 'fr' ? 'Titre 2' : 'Heading 2'}</option>
              <option value="h3">${this.currentLang === 'fr' ? 'Titre 3' : 'Heading 3'}</option>
              <option value="h4">${this.currentLang === 'fr' ? 'Titre 4' : 'Heading 4'}</option>
            </select>
          </div>

          <div class="toolbar-group">
            <button
              class="toolbar-button ${this.isCommandActive('bold') ? 'active' : ''}"
              @click="${() => this.execCommand('bold')}"
              aria-label="${this.currentLang === 'fr' ? 'Gras' : 'Bold'}"
              title="${this.currentLang === 'fr' ? 'Gras' : 'Bold'}"
            >
              <strong>B</strong>
            </button>
            <button
              class="toolbar-button ${this.isCommandActive('italic') ? 'active' : ''}"
              @click="${() => this.execCommand('italic')}"
              aria-label="${this.currentLang === 'fr' ? 'Italique' : 'Italic'}"
              title="${this.currentLang === 'fr' ? 'Italique' : 'Italic'}"
            >
              <em>I</em>
            </button>
            <button
              class="toolbar-button ${this.isCommandActive('underline') ? 'active' : ''}"
              @click="${() => this.execCommand('underline')}"
              aria-label="${this.currentLang === 'fr' ? 'Souligné' : 'Underline'}"
              title="${this.currentLang === 'fr' ? 'Souligné' : 'Underline'}"
            >
              <u>U</u>
            </button>
          </div>

          <div class="toolbar-group">
            <button
              class="toolbar-button ${this.isCommandActive('insertUnorderedList') ? 'active' : ''}"
              @click="${() => this.execCommand('insertUnorderedList')}"
              aria-label="${this.currentLang === 'fr' ? 'Liste à puces' : 'Bullet list'}"
              title="${this.currentLang === 'fr' ? 'Liste à puces' : 'Bullet list'}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
              </svg>
            </button>
            <button
              class="toolbar-button ${this.isCommandActive('insertOrderedList') ? 'active' : ''}"
              @click="${() => this.execCommand('insertOrderedList')}"
              aria-label="${this.currentLang === 'fr' ? 'Liste numérotée' : 'Numbered list'}"
              title="${this.currentLang === 'fr' ? 'Liste numérotée' : 'Numbered list'}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
              </svg>
            </button>
          </div>

          <div class="toolbar-group">
            <button
              class="toolbar-button"
              @click="${() => this.execCommand('createLink', prompt(this.currentLang === 'fr' ? 'Entrez l\'URL:' : 'Enter URL:') || '')}"
              aria-label="${this.currentLang === 'fr' ? 'Insérer un lien' : 'Insert link'}"
              title="${this.currentLang === 'fr' ? 'Insérer un lien' : 'Insert link'}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </button>
            <button
              class="toolbar-button"
              @click="${() => this.execCommand('unlink')}"
              aria-label="${this.currentLang === 'fr' ? 'Supprimer le lien' : 'Remove link'}"
              title="${this.currentLang === 'fr' ? 'Supprimer le lien' : 'Remove link'}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01 1.41-1.41L3.41 2.86 2 4.27z"/>
              </svg>
            </button>
          </div>

          <div class="toolbar-group">
            <button
              class="toolbar-button"
              @click="${() => this.execCommand('removeFormat')}"
              aria-label="${this.currentLang === 'fr' ? 'Effacer le formatage' : 'Clear formatting'}"
              title="${this.currentLang === 'fr' ? 'Effacer le formatage' : 'Clear formatting'}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/>
              </svg>
            </button>
          </div>
        </div>

        <div
          class="editor-content"
          contenteditable="true"
          @input="${this.handleContentChange}"
          @paste="${this.handleContentChange}"
          data-placeholder="${this.currentPlaceholder}"
          role="textbox"
          aria-multiline="true"
          aria-label="${this.currentLang === 'fr' ? 'Zone d\'édition' : 'Editor area'}"
        ></div>

        <div class="editor-footer">
          ${this.showCharCount ? html`
            <div class="char-count ${charCountClass}">
              ${this.charCount}${this.maxLength > 0 ? ` / ${this.maxLength}` : ''} 
              ${this.currentLang === 'fr' ? 'caractères' : 'characters'}
            </div>
          ` : ''}

          ${this.bilingual ? html`
            <div class="lang-toggle">
              <span>${this.currentLang === 'fr' ? 'Langue:' : 'Language:'}</span>
              <button
                class="lang-button ${this.currentLang === 'en' ? 'active' : ''}"
                @click="${() => this.switchLanguage('en')}"
                aria-pressed="${this.currentLang === 'en'}"
              >
                EN
              </button>
              <button
                class="lang-button ${this.currentLang === 'fr' ? 'active' : ''}"
                @click="${() => this.switchLanguage('fr')}"
                aria-pressed="${this.currentLang === 'fr'}"
              >
                FR
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-rich-text-editor': EvaGCRichTextEditor;
  }
}
