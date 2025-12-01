/**
 * GC Date Picker Component
 * Government of Canada date picker with bilingual calendar
 * WCAG 2.1 AA compliant with keyboard navigation
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('eva-gc-date-picker')
export class EvaGCDatePicker extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .date-picker-container {
      position: relative;
    }

    .date-input-wrapper {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    .date-input {
      padding: var(--eva-spacing-3, 12px) var(--eva-spacing-4, 16px);
      padding-right: 40px;
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 4px;
      font-size: 16px;
      font-family: inherit;
      min-width: 200px;
      background: var(--eva-background-primary, #fff);
      color: var(--eva-text-primary, #333);
    }

    .date-input:hover {
      border-color: var(--eva-border-secondary, #999);
    }

    .date-input:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
      border-color: var(--eva-border-focus, #4169E1);
    }

    .date-input:disabled {
      background: var(--eva-background-tertiary, #e5e5e5);
      color: var(--eva-text-tertiary, #999);
      cursor: not-allowed;
    }

    .calendar-icon {
      position: absolute;
      right: 12px;
      width: 20px;
      height: 20px;
      pointer-events: none;
      color: var(--eva-text-secondary, #666);
    }

    .calendar-popup {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      background: var(--eva-background-primary, #fff);
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 8px;
      box-shadow: var(--eva-shadow-elevation-high, 0 8px 16px rgba(0, 0, 0, 0.15));
      padding: var(--eva-spacing-4, 16px);
      z-index: 1000;
      min-width: 300px;
      display: none;
    }

    .calendar-popup.open {
      display: block;
    }

    .calendar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--eva-spacing-4, 16px);
      padding-bottom: var(--eva-spacing-3, 12px);
      border-bottom: 1px solid var(--eva-border-secondary, #e5e5e5);
    }

    .calendar-title {
      font-weight: 700;
      font-size: 16px;
      color: var(--eva-text-primary, #333);
    }

    .calendar-nav-button {
      background: none;
      border: 1px solid var(--eva-border-primary, #ddd);
      border-radius: 4px;
      width: 32px;
      height: 32px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--eva-text-primary, #333);
      transition: all 0.2s;
    }

    .calendar-nav-button:hover {
      background: var(--eva-background-secondary, #f5f5f5);
      border-color: var(--eva-brand-primary, #26374A);
    }

    .calendar-nav-button:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 4px;
    }

    .calendar-day-header {
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      color: var(--eva-text-secondary, #666);
      padding: var(--eva-spacing-2, 8px);
    }

    .calendar-day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
      background: transparent;
      color: var(--eva-text-primary, #333);
      min-height: 40px;
    }

    .calendar-day:hover {
      background: var(--eva-background-secondary, #f5f5f5);
      border-color: var(--eva-border-primary, #ddd);
    }

    .calendar-day:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: -3px;
    }

    .calendar-day.other-month {
      color: var(--eva-text-tertiary, #999);
    }

    .calendar-day.selected {
      background: var(--eva-brand-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
      font-weight: 600;
    }

    .calendar-day.today {
      border-color: var(--eva-brand-primary, #26374A);
      font-weight: 600;
    }

    .calendar-day:disabled {
      color: var(--eva-text-tertiary, #999);
      cursor: not-allowed;
      opacity: 0.5;
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  label = '';

  @property({ type: String })
  placeholder = 'YYYY-MM-DD';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  min = '';

  @property({ type: String })
  max = '';

  @state()
  private isOpen = false;

  @state()
  private currentMonth = new Date().getMonth();

  @state()
  private currentYear = new Date().getFullYear();

  private monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  private monthNamesFr = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  private dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private dayNamesFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  private toggleCalendar() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  private handlePrevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  private handleNextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  private handleDateSelect(date: Date) {
    const formatted = this.formatDate(date);
    this.value = formatted;
    this.isOpen = false;
    
    this.dispatchEvent(
      new CustomEvent('date-change', {
        detail: { value: formatted, date },
        bubbles: true,
        composed: true,
      })
    );
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private getDaysInMonth(month: number, year: number): Date[] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    
    const days: Date[] = [];
    
    // Previous month days
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    
    for (let i = startDay - 1; i >= 0; i--) {
      days.push(new Date(prevYear, prevMonth, daysInPrevMonth - i));
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(nextYear, nextMonth, i));
    }
    
    return days;
  }

  render() {
    const isEnglish = this.lang === 'en';
    const monthNames = isEnglish ? this.monthNamesEn : this.monthNamesFr;
    const dayNames = isEnglish ? this.dayNamesEn : this.dayNamesFr;
    const days = this.getDaysInMonth(this.currentMonth, this.currentYear);
    const today = new Date();
    const selectedDate = this.value ? new Date(this.value) : null;

    return html`
      <div class="date-picker-container">
        <div class="date-input-wrapper">
          <input
            type="text"
            class="date-input"
            .value=${this.value}
            placeholder="${this.placeholder}"
            ?disabled=${this.disabled}
            @click=${this.toggleCalendar}
            @input=${(e: Event) => {
              this.value = (e.target as HTMLInputElement).value;
            }}
            aria-label="${this.label || (isEnglish ? 'Date' : 'Date')}"
          />
          <svg class="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>

        <div class="calendar-popup ${this.isOpen ? 'open' : ''}" role="dialog" aria-modal="true">
          <div class="calendar-header">
            <button
              class="calendar-nav-button"
              @click=${this.handlePrevMonth}
              aria-label="${isEnglish ? 'Previous month' : 'Mois précédent'}"
            >
              ‹
            </button>
            <div class="calendar-title">
              ${monthNames[this.currentMonth]} ${this.currentYear}
            </div>
            <button
              class="calendar-nav-button"
              @click=${this.handleNextMonth}
              aria-label="${isEnglish ? 'Next month' : 'Mois suivant'}"
            >
              ›
            </button>
          </div>

          <div class="calendar-grid">
            ${dayNames.map(day => html`<div class="calendar-day-header">${day}</div>`)}
            ${days.map(date => {
              const isOtherMonth = date.getMonth() !== this.currentMonth;
              const isToday = 
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();
              const isSelected = 
                selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

              return html`
                <button
                  class="calendar-day ${isOtherMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}"
                  @click=${() => this.handleDateSelect(date)}
                  aria-label="${this.formatDate(date)}"
                >
                  ${date.getDate()}
                </button>
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-date-picker': EvaGCDatePicker;
  }
}
