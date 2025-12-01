import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Problem category
 */
export type ProblemCategory = 'broken-link' | 'incorrect-info' | 'missing-info' | 'error' | 'other';

/**
 * Form data interface
 */
export interface ReportProblemData {
  category: ProblemCategory;
  description: string;
  email?: string;
  url: string;
  userAgent: string;
  timestamp: string;
}

/**
 * EVA GC Report a Problem Component
 * 
 * Standard Government of Canada "Report a problem" form.
 * Follows official canada.ca patterns for user feedback.
 * 
 * @element eva-gc-report-problem
 * 
 * @fires submit - Fired when form is submitted
 * 
 * @example
 * ```html
 * <eva-gc-report-problem
 *   lang="en"
 *   endpoint="/api/report-problem">
 * </eva-gc-report-problem>
 * ```
 */
@customElement('eva-gc-report-problem')
export class EvaGCReportProblem extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .report-problem {
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 24px;
      max-width: 800px;
    }

    .report-title {
      font-size: 24px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 8px 0;
    }

    .report-description {
      font-size: 16px;
      color: var(--gc-color-text-secondary, #666666);
      margin: 0 0 24px 0;
      line-height: 1.5;
    }

    .form-group {
      margin-bottom: 24px;
    }

    label {
      display: block;
      font-size: 16px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin-bottom: 8px;
    }

    .required-indicator {
      color: var(--gc-color-error, #d3080c);
      margin-left: 4px;
    }

    .field-description {
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
      margin-bottom: 8px;
    }

    select,
    textarea,
    input[type="email"] {
      width: 100%;
      padding: 12px;
      border: 2px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      font-size: 16px;
      font-family: inherit;
      transition: border-color 0.2s ease;
      box-sizing: border-box;
    }

    select:focus,
    textarea:focus,
    input[type="email"]:focus {
      outline: none;
      border-color: var(--gc-color-focus, #26374A);
      box-shadow: 0 0 0 3px var(--gc-color-focus-ring, rgba(38, 55, 74, 0.2));
    }

    select {
      background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E") no-repeat right 12px center;
      padding-right: 40px;
      appearance: none;
      cursor: pointer;
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }

    .char-count {
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
      text-align: right;
      margin-top: 4px;
    }

    .char-count.warning {
      color: var(--gc-color-warning-text, #856404);
    }

    .char-count.error {
      color: var(--gc-color-error, #d3080c);
    }

    .privacy-notice {
      background: var(--gc-color-info-background, #d9edf7);
      border-left: 4px solid var(--gc-color-info, #0073e6);
      padding: 16px;
      margin: 24px 0;
      font-size: 14px;
      line-height: 1.5;
    }

    .privacy-notice strong {
      display: block;
      margin-bottom: 8px;
    }

    .form-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    button {
      padding: 12px 24px;
      border: 2px solid transparent;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 44px;
    }

    .submit-button {
      background: var(--gc-color-primary, #26374A);
      color: white;
    }

    .submit-button:hover:not(:disabled) {
      background: var(--gc-color-primary-dark, #1c2c3a);
    }

    .submit-button:focus {
      outline: 3px solid var(--gc-color-focus, #26374A);
      outline-offset: 2px;
    }

    .submit-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .cancel-button {
      background: white;
      color: var(--gc-color-primary, #26374A);
      border-color: var(--gc-color-primary, #26374A);
    }

    .cancel-button:hover {
      background: var(--gc-color-background-hover, #f0f0f0);
    }

    .cancel-button:focus {
      outline: 3px solid var(--gc-color-focus, #26374A);
      outline-offset: 2px;
    }

    .success-message {
      background: var(--gc-color-success-background, #d4edda);
      border: 1px solid var(--gc-color-success-border, #c3e6cb);
      color: var(--gc-color-success-text, #155724);
      border-radius: 4px;
      padding: 20px;
      margin-top: 20px;
    }

    .success-message h3 {
      margin: 0 0 8px 0;
      font-size: 18px;
    }

    .error-message {
      background: var(--gc-color-error-background, #f8d7da);
      border: 1px solid var(--gc-color-error-border, #f5c6cb);
      color: var(--gc-color-error-text, #721c24);
      border-radius: 4px;
      padding: 20px;
      margin-top: 20px;
    }

    .error-message h3 {
      margin: 0 0 8px 0;
      font-size: 18px;
    }

    @media (max-width: 640px) {
      .report-problem {
        padding: 16px;
      }

      .form-actions {
        flex-direction: column;
      }

      button {
        width: 100%;
      }
    }
  `;

  /** Language (en or fr) */
  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  /** API endpoint for form submission */
  @property({ type: String })
  endpoint = '';

  /** Show email field (optional) */
  @property({ type: Boolean, attribute: 'show-email' })
  showEmail = false;

  /** Selected category */
  @state()
  private category: ProblemCategory = 'other';

  /** Description text */
  @state()
  private description = '';

  /** Optional email */
  @state()
  private email = '';

  /** Submission state */
  @state()
  private isSubmitting = false;

  /** Success state */
  @state()
  private isSuccess = false;

  /** Error message */
  @state()
  private errorMessage = '';

  private readonly maxDescriptionLength = 2000;

  private get labels() {
    return {
      title: this.lang === 'fr' ? 'Signaler un problème sur cette page' : 'Report a problem on this page',
      description: this.lang === 'fr' 
        ? 'Veuillez sélectionner toutes les cases qui s\'appliquent :' 
        : 'Please select all that apply:',
      categoryLabel: this.lang === 'fr' ? 'Type de problème' : 'Problem type',
      categories: {
        'broken-link': this.lang === 'fr' ? 'Un lien ne fonctionne pas' : 'A link is broken',
        'incorrect-info': this.lang === 'fr' ? 'L\'information est erronée' : 'Information is incorrect',
        'missing-info': this.lang === 'fr' ? 'L\'information est manquante' : 'Information is missing',
        'error': this.lang === 'fr' ? 'Erreur de la page' : 'Page error',
        'other': this.lang === 'fr' ? 'Autre' : 'Other'
      },
      descriptionLabel: this.lang === 'fr' ? 'Description du problème' : 'Problem description',
      descriptionPlaceholder: this.lang === 'fr' 
        ? 'Veuillez décrire le problème en détail...' 
        : 'Please describe the problem in detail...',
      emailLabel: this.lang === 'fr' ? 'Courriel (facultatif)' : 'Email (optional)',
      emailDescription: this.lang === 'fr' 
        ? 'Si vous souhaitez une réponse, veuillez fournir votre adresse courriel.' 
        : 'If you would like a response, please provide your email address.',
      privacyTitle: this.lang === 'fr' ? 'Confidentialité' : 'Privacy',
      privacyText: this.lang === 'fr'
        ? 'Les renseignements personnels recueillis sont régis par la Loi sur la protection des renseignements personnels. Ces renseignements sont recueillis dans le cadre du Programme de rétroaction Web et seront utilisés pour améliorer le site Web du gouvernement du Canada.'
        : 'Personal information collected is governed by the Privacy Act. This information is collected as part of the Web feedback program and will be used to improve the Government of Canada website.',
      submit: this.lang === 'fr' ? 'Soumettre' : 'Submit',
      cancel: this.lang === 'fr' ? 'Annuler' : 'Cancel',
      successTitle: this.lang === 'fr' ? 'Merci de votre aide!' : 'Thank you for your help!',
      successMessage: this.lang === 'fr' 
        ? 'Vous ne recevrez pas de réponse. Pour toute question, veuillez communiquer avec nous.' 
        : 'You will not receive a reply. For enquiries, please contact us.',
      errorTitle: this.lang === 'fr' ? 'Erreur' : 'Error',
      errorMessage: this.lang === 'fr' 
        ? 'Une erreur s\'est produite lors de la soumission. Veuillez réessayer.' 
        : 'An error occurred during submission. Please try again.',
      required: this.lang === 'fr' ? 'requis' : 'required',
      charactersRemaining: this.lang === 'fr' ? 'caractères restants' : 'characters remaining'
    };
  }

  private get descriptionLength(): number {
    return this.description.length;
  }

  private get charactersRemaining(): number {
    return this.maxDescriptionLength - this.descriptionLength;
  }

  private get charCountClass(): string {
    if (this.charactersRemaining < 0) return 'error';
    if (this.charactersRemaining < 100) return 'warning';
    return '';
  }

  private handleCategoryChange(e: Event) {
    this.category = (e.target as HTMLSelectElement).value as ProblemCategory;
  }

  private handleDescriptionInput(e: Event) {
    this.description = (e.target as HTMLTextAreaElement).value;
  }

  private handleEmailInput(e: Event) {
    this.email = (e.target as HTMLInputElement).value;
  }

  private handleCancel() {
    this.category = 'other';
    this.description = '';
    this.email = '';
    this.isSuccess = false;
    this.errorMessage = '';
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    if (!this.description.trim() || this.charactersRemaining < 0) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const formData: ReportProblemData = {
      category: this.category,
      description: this.description.trim(),
      email: this.email.trim() || undefined,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    try {
      if (this.endpoint) {
        const response = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }
      }

      this.dispatchEvent(new CustomEvent('submit', {
        detail: formData,
        bubbles: true,
        composed: true
      }));

      this.isSuccess = true;
      this.handleCancel();
    } catch (error) {
      this.errorMessage = this.labels.errorMessage;
    } finally {
      this.isSubmitting = false;
    }
  }

  override render() {
    if (this.isSuccess) {
      return html`
        <div class="success-message" role="status">
          <h3>${this.labels.successTitle}</h3>
          <p>${this.labels.successMessage}</p>
        </div>
      `;
    }

    return html`
      <div class="report-problem">
        <h2 class="report-title">${this.labels.title}</h2>
        <p class="report-description">${this.labels.description}</p>

        <form @submit=${this.handleSubmit}>
          <div class="form-group">
            <label for="category">
              ${this.labels.categoryLabel}
              <span class="required-indicator" aria-label="${this.labels.required}">*</span>
            </label>
            <select
              id="category"
              .value=${this.category}
              @change=${this.handleCategoryChange}
              required
              aria-required="true">
              ${Object.entries(this.labels.categories).map(([value, label]) => html`
                <option value="${value}">${label}</option>
              `)}
            </select>
          </div>

          <div class="form-group">
            <label for="description">
              ${this.labels.descriptionLabel}
              <span class="required-indicator" aria-label="${this.labels.required}">*</span>
            </label>
            <textarea
              id="description"
              .value=${this.description}
              @input=${this.handleDescriptionInput}
              placeholder="${this.labels.descriptionPlaceholder}"
              maxlength="${this.maxDescriptionLength}"
              required
              aria-required="true"
              aria-describedby="char-count"></textarea>
            <div 
              id="char-count" 
              class="char-count ${this.charCountClass}"
              aria-live="polite">
              ${this.charactersRemaining} ${this.labels.charactersRemaining}
            </div>
          </div>

          ${this.showEmail ? html`
            <div class="form-group">
              <label for="email">${this.labels.emailLabel}</label>
              <p class="field-description">${this.labels.emailDescription}</p>
              <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${this.handleEmailInput}
                placeholder="example@email.com" />
            </div>
          ` : ''}

          <div class="privacy-notice">
            <strong>${this.labels.privacyTitle}</strong>
            ${this.labels.privacyText}
          </div>

          <div class="form-actions">
            <button
              type="submit"
              class="submit-button"
              ?disabled=${this.isSubmitting || !this.description.trim() || this.charactersRemaining < 0}>
              ${this.isSubmitting 
                ? (this.lang === 'fr' ? 'Envoi en cours...' : 'Submitting...') 
                : this.labels.submit}
            </button>
            <button
              type="button"
              class="cancel-button"
              @click=${this.handleCancel}
              ?disabled=${this.isSubmitting}>
              ${this.labels.cancel}
            </button>
          </div>
        </form>

        ${this.errorMessage ? html`
          <div class="error-message" role="alert">
            <h3>${this.labels.errorTitle}</h3>
            <p>${this.errorMessage}</p>
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-report-problem': EvaGCReportProblem;
  }
}
