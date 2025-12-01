/**
 * GC Filter Interface Component
 * Advanced filtering UI for Government of Canada applications
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface FilterOption {
  label: string;
  labelFr?: string;
  value: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  labelFr?: string;
  type: 'checkbox' | 'radio' | 'select' | 'range' | 'date';
  options?: FilterOption[];
  min?: number;
  max?: number;
}

@customElement('eva-gc-filter')
export class EvaGCFilter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--eva-background-primary, #fff);
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 8px;
      padding: var(--eva-spacing-4, 16px);
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--eva-spacing-4, 16px);
      padding-bottom: var(--eva-spacing-3, 12px);
      border-bottom: 1px solid var(--eva-border-secondary, #e5e5e5);
    }

    .filter-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--eva-text-primary, #333);
      margin: 0;
    }

    .filter-clear {
      background: none;
      border: none;
      color: var(--eva-text-link, #26374A);
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
      padding: var(--eva-spacing-2, 8px);
      border-radius: 4px;
    }

    .filter-clear:hover {
      color: var(--eva-text-link-hover, #0c1a2b);
    }

    .filter-clear:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .filter-groups {
      display: flex;
      flex-direction: column;
      gap: var(--eva-spacing-6, 24px);
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: var(--eva-spacing-2, 8px);
    }

    .filter-group-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding: var(--eva-spacing-2, 8px);
      border-radius: 4px;
      transition: background 0.2s;
    }

    .filter-group-header:hover {
      background: var(--eva-background-secondary, #f5f5f5);
    }

    .filter-group-label {
      font-size: 16px;
      font-weight: 600;
      color: var(--eva-text-primary, #333);
    }

    .filter-group-toggle {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }

    .filter-group-toggle.collapsed {
      transform: rotate(-90deg);
    }

    .filter-group-content {
      display: flex;
      flex-direction: column;
      gap: var(--eva-spacing-2, 8px);
      padding-left: var(--eva-spacing-2, 8px);
    }

    .filter-group-content.collapsed {
      display: none;
    }

    .filter-option {
      display: flex;
      align-items: center;
      gap: var(--eva-spacing-2, 8px);
      padding: var(--eva-spacing-2, 8px);
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .filter-option:hover {
      background: var(--eva-background-secondary, #f5f5f5);
    }

    .filter-option input[type="checkbox"],
    .filter-option input[type="radio"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .filter-option-label {
      flex: 1;
      font-size: 14px;
      color: var(--eva-text-primary, #333);
      cursor: pointer;
    }

    .filter-option-count {
      font-size: 13px;
      color: var(--eva-text-secondary, #666);
      background: var(--eva-background-tertiary, #e5e5e5);
      padding: 2px 8px;
      border-radius: 12px;
    }

    .filter-range {
      display: flex;
      gap: var(--eva-spacing-2, 8px);
      align-items: center;
    }

    .filter-range input {
      flex: 1;
      padding: var(--eva-spacing-2, 8px);
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 4px;
      font-size: 14px;
    }

    .filter-actions {
      margin-top: var(--eva-spacing-4, 16px);
      padding-top: var(--eva-spacing-4, 16px);
      border-top: 1px solid var(--eva-border-secondary, #e5e5e5);
      display: flex;
      gap: var(--eva-spacing-3, 12px);
    }

    .filter-button {
      flex: 1;
      padding: var(--eva-spacing-3, 12px);
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .filter-button.primary {
      background: var(--eva-brand-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
    }

    .filter-button.primary:hover {
      background: var(--eva-interactive-primary-hover, #1a2835);
    }

    .filter-button.secondary {
      background: transparent;
      color: var(--eva-brand-primary, #26374A);
      border: 2px solid var(--eva-brand-primary, #26374A);
    }

    .filter-button.secondary:hover {
      background: var(--eva-background-secondary, #f5f5f5);
    }

    .filter-button:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .filter-applied {
      margin-top: var(--eva-spacing-3, 12px);
      padding: var(--eva-spacing-3, 12px);
      background: var(--eva-background-secondary, #f5f5f5);
      border-radius: 4px;
    }

    .filter-applied-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: var(--eva-spacing-2, 8px);
    }

    .filter-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--eva-spacing-2, 8px);
    }

    .filter-tag {
      display: inline-flex;
      align-items: center;
      gap: var(--eva-spacing-2, 8px);
      padding: 4px 12px;
      background: var(--eva-brand-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
      border-radius: 16px;
      font-size: 13px;
    }

    .filter-tag-remove {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background 0.2s;
    }

    .filter-tag-remove:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `;

  @property({ type: Array })
  groups: FilterGroup[] = [];

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  title = 'Filters';

  @property({ type: String })
  titleFr = 'Filtres';

  @state()
  private selectedFilters = new Map<string, Set<string>>();

  @state()
  private collapsedGroups = new Set<string>();

  @state()
  private rangeValues = new Map<string, { min?: number; max?: number }>();

  private toggleGroup(groupId: string) {
    if (this.collapsedGroups.has(groupId)) {
      this.collapsedGroups.delete(groupId);
    } else {
      this.collapsedGroups.add(groupId);
    }
    this.requestUpdate();
  }

  private handleOptionChange(groupId: string, value: string, checked: boolean, type: 'checkbox' | 'radio' | 'select' | 'date') {
    if (!this.selectedFilters.has(groupId)) {
      this.selectedFilters.set(groupId, new Set());
    }

    const groupFilters = this.selectedFilters.get(groupId)!;

    if (type === 'radio') {
      groupFilters.clear();
      if (checked) {
        groupFilters.add(value);
      }
    } else {
      if (checked) {
        groupFilters.add(value);
      } else {
        groupFilters.delete(value);
      }
    }

    this.requestUpdate();
    this.emitFilterChange();
  }

  private handleRangeChange(groupId: string, type: 'min' | 'max', value: number) {
    if (!this.rangeValues.has(groupId)) {
      this.rangeValues.set(groupId, {});
    }

    const range = this.rangeValues.get(groupId)!;
    range[type] = value;

    this.requestUpdate();
    this.emitFilterChange();
  }

  private clearAllFilters() {
    this.selectedFilters.clear();
    this.rangeValues.clear();
    this.requestUpdate();
    this.emitFilterChange();
  }

  private removeFilter(groupId: string, value?: string) {
    if (value) {
      this.selectedFilters.get(groupId)?.delete(value);
    } else {
      this.selectedFilters.delete(groupId);
      this.rangeValues.delete(groupId);
    }
    this.requestUpdate();
    this.emitFilterChange();
  }

  private emitFilterChange() {
    const filters: Record<string, any> = {};

    this.selectedFilters.forEach((values, groupId) => {
      if (values.size > 0) {
        filters[groupId] = Array.from(values);
      }
    });

    this.rangeValues.forEach((range, groupId) => {
      if (range.min !== undefined || range.max !== undefined) {
        filters[groupId] = range;
      }
    });

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: { filters },
        bubbles: true,
        composed: true,
      })
    );
  }

  private getAppliedFilters() {
    const applied: Array<{ groupId: string; groupLabel: string; value: string; valueLabel: string }> = [];

    this.selectedFilters.forEach((values, groupId) => {
      const group = this.groups.find(g => g.id === groupId);
      if (!group) return;

      const groupLabel = this.lang === 'en' ? group.label : (group.labelFr || group.label);

      values.forEach(value => {
        const option = group.options?.find(o => o.value === value);
        const valueLabel = option ? (this.lang === 'en' ? option.label : (option.labelFr || option.label)) : value;
        applied.push({ groupId, groupLabel, value, valueLabel });
      });
    });

    this.rangeValues.forEach((range, groupId) => {
      const group = this.groups.find(g => g.id === groupId);
      if (!group) return;

      const groupLabel = this.lang === 'en' ? group.label : (group.labelFr || group.label);
      const valueLabel = `${range.min || '−∞'} − ${range.max || '∞'}`;
      applied.push({ groupId, groupLabel, value: '', valueLabel });
    });

    return applied;
  }

  render() {
    const isEnglish = this.lang === 'en';
    const displayTitle = isEnglish ? this.title : this.titleFr;
    const appliedFilters = this.getAppliedFilters();

    return html`
      <div class="filter-container">
        <div class="filter-header">
          <h2 class="filter-title">${displayTitle}</h2>
          ${appliedFilters.length > 0
            ? html`
                <button class="filter-clear" @click=${this.clearAllFilters}>
                  ${isEnglish ? 'Clear all' : 'Tout effacer'}
                </button>
              `
            : ''}
        </div>

        ${appliedFilters.length > 0
          ? html`
              <div class="filter-applied">
                <div class="filter-applied-title">
                  ${isEnglish ? 'Applied filters' : 'Filtres appliqués'}:
                </div>
                <div class="filter-tags">
                  ${appliedFilters.map(
                    filter => html`
                      <span class="filter-tag">
                        ${filter.valueLabel}
                        <button
                          class="filter-tag-remove"
                          @click=${() => this.removeFilter(filter.groupId, filter.value)}
                          aria-label="${isEnglish ? 'Remove' : 'Retirer'} ${filter.valueLabel}"
                        >
                          ✕
                        </button>
                      </span>
                    `
                  )}
                </div>
              </div>
            `
          : ''}

        <div class="filter-groups">
          ${this.groups.map(group => this.renderFilterGroup(group))}
        </div>
      </div>
    `;
  }

  private renderFilterGroup(group: FilterGroup) {
    const isEnglish = this.lang === 'en';
    const label = isEnglish ? group.label : (group.labelFr || group.label);
    const isCollapsed = this.collapsedGroups.has(group.id);

    return html`
      <div class="filter-group">
        <div class="filter-group-header" @click=${() => this.toggleGroup(group.id)}>
          <span class="filter-group-label">${label}</span>
          <span class="filter-group-toggle ${isCollapsed ? 'collapsed' : ''}">▼</span>
        </div>
        <div class="filter-group-content ${isCollapsed ? 'collapsed' : ''}">
          ${group.type === 'range'
            ? this.renderRangeFilter(group)
            : group.options?.map(option => this.renderOption(group, option))}
        </div>
      </div>
    `;
  }

  private renderOption(group: FilterGroup, option: FilterOption) {
    const isEnglish = this.lang === 'en';
    const label = isEnglish ? option.label : (option.labelFr || option.label);
    const isChecked = this.selectedFilters.get(group.id)?.has(option.value) || false;

    return html`
      <label class="filter-option">
        <input
          type="${group.type}"
          name="${group.id}"
          value="${option.value}"
          ?checked=${isChecked}
          @change=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            this.handleOptionChange(group.id, option.value, input.checked, group.type as 'checkbox' | 'radio' | 'select' | 'date');
          }}
        />
        <span class="filter-option-label">${label}</span>
        ${option.count !== undefined ? html`<span class="filter-option-count">${option.count}</span>` : ''}
      </label>
    `;
  }

  private renderRangeFilter(group: FilterGroup) {
    const isEnglish = this.lang === 'en';
    const range = this.rangeValues.get(group.id) || {};

    return html`
      <div class="filter-range">
        <input
          type="number"
          placeholder="${isEnglish ? 'Min' : 'Min'}"
          .value=${range.min?.toString() || ''}
          min="${group.min}"
          max="${group.max}"
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            this.handleRangeChange(group.id, 'min', Number(input.value));
          }}
        />
        <span>−</span>
        <input
          type="number"
          placeholder="${isEnglish ? 'Max' : 'Max'}"
          .value=${range.max?.toString() || ''}
          min="${group.min}"
          max="${group.max}"
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            this.handleRangeChange(group.id, 'max', Number(input.value));
          }}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-filter': EvaGCFilter;
  }
}
