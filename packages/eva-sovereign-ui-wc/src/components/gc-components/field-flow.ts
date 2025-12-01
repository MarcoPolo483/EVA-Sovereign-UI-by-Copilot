/**
 * GC Field Flow Component
 * Conditional form logic for Government of Canada forms
 * Dynamically shows/hides fields based on user input
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface FieldFlowRule {
  field: string;
  operator: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan';
  value: string | number | boolean;
  action: 'show' | 'hide' | 'enable' | 'disable' | 'require';
  targets: string[];
}

@customElement('eva-gc-field-flow')
export class EvaGCFieldFlow extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .field-flow-container {
      display: flex;
      flex-direction: column;
      gap: var(--eva-spacing-4, 16px);
    }

    .field-group {
      display: flex;
      flex-direction: column;
      gap: var(--eva-spacing-2, 8px);
      transition: all 0.3s ease;
    }

    .field-group.hidden {
      display: none;
    }

    .field-group.disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    .field-label {
      font-weight: 600;
      font-size: 16px;
      color: var(--eva-text-primary, #333);
      margin-bottom: var(--eva-spacing-2, 8px);
    }

    .field-label.required::after {
      content: '*';
      color: var(--eva-feedback-error, #D32F2F);
      margin-left: 4px;
    }

    .field-input {
      padding: var(--eva-spacing-3, 12px);
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 4px;
      font-size: 16px;
      font-family: inherit;
      background: var(--eva-background-primary, #fff);
      color: var(--eva-text-primary, #333);
    }

    .field-input:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
      border-color: var(--eva-border-focus, #4169E1);
    }

    .field-helper {
      font-size: 14px;
      color: var(--eva-text-secondary, #666);
      margin-top: var(--eva-spacing-1, 4px);
    }
  `;

  @property({ type: Array })
  rules: FieldFlowRule[] = [];

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @state()
  private fieldStates = new Map<string, any>();

  @state()
  private fieldVisibility = new Map<string, boolean>();

  @state()
  private fieldEnabled = new Map<string, boolean>();

  @state()
  private fieldRequired = new Map<string, boolean>();

  connectedCallback() {
    super.connectedCallback();
    this.evaluateAllRules();
  }

  private handleFieldChange(fieldName: string, value: any) {
    this.fieldStates.set(fieldName, value);
    this.evaluateAllRules();

    this.dispatchEvent(
      new CustomEvent('field-change', {
        detail: { field: fieldName, value, states: Object.fromEntries(this.fieldStates) },
        bubbles: true,
        composed: true,
      })
    );
  }

  private evaluateAllRules() {
    // Reset all states
    this.fieldVisibility.clear();
    this.fieldEnabled.clear();
    this.fieldRequired.clear();

    // Evaluate each rule
    this.rules.forEach(rule => {
      const fieldValue = this.fieldStates.get(rule.field);
      const conditionMet = this.evaluateCondition(fieldValue, rule.operator, rule.value);

      if (conditionMet) {
        rule.targets.forEach(target => {
          switch (rule.action) {
            case 'show':
              this.fieldVisibility.set(target, true);
              break;
            case 'hide':
              this.fieldVisibility.set(target, false);
              break;
            case 'enable':
              this.fieldEnabled.set(target, true);
              break;
            case 'disable':
              this.fieldEnabled.set(target, false);
              break;
            case 'require':
              this.fieldRequired.set(target, true);
              break;
          }
        });
      }
    });

    this.requestUpdate();
  }

  private evaluateCondition(fieldValue: any, operator: string, ruleValue: any): boolean {
    switch (operator) {
      case 'equals':
        return fieldValue == ruleValue;
      case 'notEquals':
        return fieldValue != ruleValue;
      case 'contains':
        return String(fieldValue).includes(String(ruleValue));
      case 'greaterThan':
        return Number(fieldValue) > Number(ruleValue);
      case 'lessThan':
        return Number(fieldValue) < Number(ruleValue);
      default:
        return false;
    }
  }

  private isFieldVisible(fieldName: string): boolean {
    return this.fieldVisibility.get(fieldName) !== false;
  }

  private isFieldEnabled(fieldName: string): boolean {
    return this.fieldEnabled.get(fieldName) !== false;
  }

  private isFieldRequired(fieldName: string): boolean {
    return this.fieldRequired.get(fieldName) === true;
  }

  render() {
    return html`
      <div class="field-flow-container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-field-flow': EvaGCFieldFlow;
  }
}
