import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Timeline item data structure
 */
export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  titleFr?: string;
  description?: string;
  descriptionFr?: string;
  status?: 'completed' | 'current' | 'upcoming';
  icon?: string;
}

/**
 * EVA GC Timeline Pattern
 * 
 * Displays events chronologically with dates, milestones,
 * and status indicators in vertical or horizontal layout.
 * 
 * @element eva-gc-timeline
 * 
 * @fires item-click - Dispatched when a timeline item is clicked
 */
@customElement('eva-gc-timeline')
export class EvaGCTimeline extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .timeline-container {
      position: relative;
      padding: 20px 0;
    }

    /* Vertical Timeline */
    .timeline-vertical {
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline-vertical .timeline-line {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      background: var(--gc-color-border-default, #e0e0e0);
      top: 0;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;
    }

    .timeline-vertical .timeline-item {
      display: grid;
      grid-template-columns: 1fr 80px 1fr;
      gap: 20px;
      align-items: center;
    }

    .timeline-vertical .timeline-item:nth-child(even) .item-content {
      grid-column: 3;
    }

    .timeline-vertical .timeline-item:nth-child(even) .item-date {
      text-align: right;
    }

    .timeline-vertical .timeline-item:nth-child(odd) .item-content {
      grid-column: 1;
    }

    .timeline-vertical .timeline-item:nth-child(odd) .item-date {
      text-align: left;
      grid-column: 3;
    }

    .timeline-marker {
      position: relative;
      z-index: 2;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: white;
      border: 4px solid var(--gc-color-primary, #26374A);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      transition: all 0.3s ease;
    }

    .timeline-item.completed .timeline-marker {
      background: var(--gc-color-success, #2e7d32);
      border-color: var(--gc-color-success, #2e7d32);
    }

    .timeline-item.current .timeline-marker {
      background: var(--gc-color-primary, #26374A);
      border-color: var(--gc-color-primary, #26374A);
      box-shadow: 0 0 0 4px rgba(38, 55, 74, 0.2);
      animation: pulse 2s infinite;
    }

    .timeline-item.upcoming .timeline-marker {
      background: white;
      border-color: var(--gc-color-border-default, #e0e0e0);
    }

    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 0 0 4px rgba(38, 55, 74, 0.2);
      }
      50% {
        box-shadow: 0 0 0 8px rgba(38, 55, 74, 0.1);
      }
    }

    .marker-icon {
      width: 20px;
      height: 20px;
      fill: white;
    }

    .item-date {
      font-size: 14px;
      font-weight: 700;
      color: var(--gc-color-text-secondary, #666666);
    }

    .item-content {
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 20px;
      transition: all 0.3s ease;
    }

    .item-content:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .item-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 8px 0;
    }

    .item-description {
      font-size: 14px;
      line-height: 1.6;
      color: var(--gc-color-text-secondary, #666666);
      margin: 0;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 700;
      margin-top: 8px;
    }

    .status-badge.completed {
      background: #e8f5e9;
      color: #2e7d32;
    }

    .status-badge.current {
      background: var(--gc-color-primary-light, #e8f4ff);
      color: var(--gc-color-primary, #26374A);
    }

    .status-badge.upcoming {
      background: #f5f5f5;
      color: #666666;
    }

    /* Horizontal Timeline */
    .timeline-horizontal {
      overflow-x: auto;
      padding: 20px 0;
    }

    .timeline-horizontal .timeline-track {
      display: flex;
      gap: 40px;
      min-width: min-content;
      position: relative;
      padding: 40px 20px;
    }

    .timeline-horizontal .timeline-line {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gc-color-border-default, #e0e0e0);
    }

    .timeline-horizontal .timeline-item {
      flex: 0 0 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .timeline-horizontal .item-date {
      text-align: center;
    }

    .timeline-horizontal .item-content {
      width: 100%;
    }

    @media (max-width: 768px) {
      .timeline-vertical .timeline-line {
        left: 20px;
      }

      .timeline-vertical .timeline-item {
        grid-template-columns: 40px 1fr;
        gap: 16px;
        padding-left: 0;
      }

      .timeline-vertical .timeline-item:nth-child(even) .item-content,
      .timeline-vertical .timeline-item:nth-child(odd) .item-content {
        grid-column: 2;
      }

      .timeline-vertical .timeline-item:nth-child(even) .item-date,
      .timeline-vertical .timeline-item:nth-child(odd) .item-date {
        display: none;
      }

      .timeline-marker {
        margin: 0;
      }
    }

    @media print {
      .timeline-horizontal {
        overflow-x: visible;
      }

      .item-content {
        box-shadow: none;
        transform: none;
      }
    }
  `;

  @property({ type: Array })
  items: TimelineItem[] = [];

  @property({ type: String })
  orientation: 'vertical' | 'horizontal' = 'vertical';

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  private getItemTitle(item: TimelineItem): string {
    return this.lang === 'fr' && item.titleFr ? item.titleFr : item.title;
  }

  private getItemDescription(item: TimelineItem): string | undefined {
    return this.lang === 'fr' && item.descriptionFr ? item.descriptionFr : item.description;
  }

  private getStatusLabel(status?: string): string {
    if (!status) return '';
    
    const labels = {
      completed: this.lang === 'fr' ? 'Terminé' : 'Completed',
      current: this.lang === 'fr' ? 'En cours' : 'Current',
      upcoming: this.lang === 'fr' ? 'À venir' : 'Upcoming'
    };

    return labels[status as keyof typeof labels] || '';
  }

  private handleItemClick(item: TimelineItem) {
    this.dispatchEvent(new CustomEvent('item-click', {
      detail: { item },
      bubbles: true,
      composed: true
    }));
  }

  private renderMarker(item: TimelineItem) {
    return html`
      <div class="timeline-marker">
        ${item.status === 'completed' ? html`
          <svg class="marker-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        ` : item.status === 'current' ? html`
          <svg class="marker-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8"/>
          </svg>
        ` : ''}
      </div>
    `;
  }

  private renderItem(item: TimelineItem) {
    const title = this.getItemTitle(item);
    const description = this.getItemDescription(item);
    const statusLabel = this.getStatusLabel(item.status);

    return html`
      <div 
        class="timeline-item ${item.status || ''}"
        @click="${() => this.handleItemClick(item)}"
      >
        ${this.renderMarker(item)}
        <div class="item-date">${item.date}</div>
        <div class="item-content">
          <h3 class="item-title">${title}</h3>
          ${description ? html`
            <p class="item-description">${description}</p>
          ` : ''}
          ${statusLabel ? html`
            <span class="status-badge ${item.status}">${statusLabel}</span>
          ` : ''}
        </div>
      </div>
    `;
  }

  override render() {
    return html`
      <div class="timeline-container timeline-${this.orientation}">
        ${this.orientation === 'vertical' ? html`
          <div class="timeline-line"></div>
          ${this.items.map(item => this.renderItem(item))}
        ` : html`
          <div class="timeline-track">
            <div class="timeline-line"></div>
            ${this.items.map(item => this.renderItem(item))}
          </div>
        `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-timeline': EvaGCTimeline;
  }
}
