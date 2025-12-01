/**
 * GC Step Indicator Component
 * Government of Canada step indicator for multi-page forms
 * WCAG 2.1 AA compliant with proper navigation
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface StepItem {
  label: string;
  labelFr?: string;
  href?: string;
  completed?: boolean;
}

@customElement('eva-gc-step-indicator')
export class EvaGCStepIndicator extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--eva-spacing-6, 24px) 0;
    }

    .step-indicator {
      padding: var(--eva-spacing-4, 16px);
      background: var(--eva-background-secondary, #f5f5f5);
      border-radius: 8px;
      border: 1px solid var(--eva-border-primary, #ddd);
    }

    .step-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    .step-list::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--eva-border-primary, #ddd);
      z-index: 0;
    }

    .step-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .step-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--eva-border-primary, #ddd);
      background: var(--eva-background-primary, #fff);
      color: var(--eva-text-secondary, #666);
      font-weight: 700;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
    }

    .step-button:hover {
      border-color: var(--eva-brand-primary, #26374A);
      background: var(--eva-background-secondary, #f5f5f5);
    }

    .step-button:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .step-item.completed .step-button {
      background: var(--eva-feedback-success, #2E8B57);
      border-color: var(--eva-feedback-success, #2E8B57);
      color: var(--eva-text-inverse, #fff);
    }

    .step-item.current .step-button {
      background: var(--eva-brand-primary, #26374A);
      border-color: var(--eva-brand-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
      box-shadow: 0 0 0 4px rgba(38, 55, 74, 0.2);
    }

    .step-item.disabled .step-button {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .step-label {
      margin-top: var(--eva-spacing-2, 8px);
      font-size: 14px;
      font-weight: 600;
      color: var(--eva-text-secondary, #666);
      text-align: center;
      max-width: 120px;
    }

    .step-item.current .step-label {
      color: var(--eva-brand-primary, #26374A);
      font-weight: 700;
    }

    .step-item.completed .step-label {
      color: var(--eva-text-primary, #333);
    }

    .step-check {
      width: 20px;
      height: 20px;
    }

    /* Mobile Layout */
    @media (max-width: 768px) {
      .step-list {
        flex-direction: column;
        align-items: stretch;
        gap: var(--eva-spacing-3, 12px);
      }

      .step-list::before {
        display: none;
      }

      .step-item {
        flex-direction: row;
        gap: var(--eva-spacing-3, 12px);
      }

      .step-button {
        flex-shrink: 0;
      }

      .step-label {
        margin-top: 0;
        text-align: left;
        max-width: none;
        flex: 1;
        display: flex;
        align-items: center;
      }
    }

    /* Print */
    @media print {
      .step-indicator {
        border: 2px solid #000;
      }

      .step-item.current .step-button {
        background: #000;
        border-color: #000;
        box-shadow: none;
      }
    }
  `;

  @property({ type: Array })
  steps: StepItem[] = [];

  @property({ type: Number })
  currentStep = 0;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  ariaLabel = 'Progress indicator';

  @property({ type: String })
  ariaLabelFr = 'Indicateur de progrès';

  private handleStepClick(index: number) {
    const step = this.steps[index];
    
    if (step.completed || index === this.currentStep) {
      this.dispatchEvent(
        new CustomEvent('step-change', {
          detail: { step: index, stepItem: step },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  render() {
    const isEnglish = this.lang === 'en';
    const ariaLabelText = isEnglish ? this.ariaLabel : this.ariaLabelFr;

    return html`
      <div class="step-indicator">
        <nav aria-label="${ariaLabelText}">
          <ol class="step-list">
            ${this.steps.map((step, index) => {
              const isCurrent = index === this.currentStep;
              const isCompleted = step.completed || false;
              const isDisabled = !isCompleted && index !== this.currentStep;
              const label = isEnglish ? step.label : (step.labelFr || step.label);

              return html`
                <li class="step-item ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''} ${isDisabled ? 'disabled' : ''}">
                  ${step.href && !isDisabled
                    ? html`
                        <a
                          href="${step.href}"
                          class="step-button"
                          @click=${(e: Event) => {
                            e.preventDefault();
                            this.handleStepClick(index);
                          }}
                          aria-label="${label} (${isCompleted ? (isEnglish ? 'Completed' : 'Complété') : isCurrent ? (isEnglish ? 'Current' : 'Actuel') : (isEnglish ? 'Not started' : 'Non commencé')})"
                          aria-current="${isCurrent ? 'step' : undefined}"
                        >
                          ${isCompleted
                            ? html`
                                <svg class="step-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              `
                            : index + 1}
                        </a>
                      `
                    : html`
                        <button
                          class="step-button"
                          @click=${() => this.handleStepClick(index)}
                          ?disabled=${isDisabled}
                          aria-label="${label} (${isCompleted ? (isEnglish ? 'Completed' : 'Complété') : isCurrent ? (isEnglish ? 'Current' : 'Actuel') : (isEnglish ? 'Not started' : 'Non commencé')})"
                          aria-current="${isCurrent ? 'step' : undefined}"
                        >
                          ${isCompleted
                            ? html`
                                <svg class="step-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              `
                            : index + 1}
                        </button>
                      `}
                  <span class="step-label">${label}</span>
                </li>
              `;
            })}
          </ol>
        </nav>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-step-indicator': EvaGCStepIndicator;
  }
}
