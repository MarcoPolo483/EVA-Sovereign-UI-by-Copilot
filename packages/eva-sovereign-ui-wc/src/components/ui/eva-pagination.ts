/**
 * EVA Pagination Component
 * Page navigation controls
 * Features: Previous, next, page numbers, ellipsis
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVAPagination extends EVABaseComponent {
  private currentPage = 1;
  private totalPages = 1;

  static get observedAttributes() {
    return ['current', 'total'];
  }

  attributeChangedCallback() {
    this.currentPage = parseInt(this.getAttr('current', '1'), 10);
    this.totalPages = parseInt(this.getAttr('total', '1'), 10);
    this.render();
  }

  private handlePageClick(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.setAttribute('current', page.toString());
    this.emit('change', { page });
  }

  private getPageNumbers(): (number | 'ellipsis')[] {
    const pages: (number | 'ellipsis')[] = [];
    
    if (this.totalPages <= 7) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always show first page
    pages.push(1);

    if (this.currentPage > 3) {
      pages.push('ellipsis');
    }

    // Show pages around current
    const start = Math.max(2, this.currentPage - 1);
    const end = Math.min(this.totalPages - 1, this.currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (this.currentPage < this.totalPages - 2) {
      pages.push('ellipsis');
    }

    // Always show last page
    pages.push(this.totalPages);

    return pages;
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${gcSpacing[2]};
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.25rem;
        height: 2.25rem;
        padding: 0 ${gcSpacing[2]};
        border: 1px solid ${modernColors.border};
        border-radius: ${gcSpacing[2]};
        font-size: 0.875rem;
        font-weight: 500;
        background: ${modernColors.background};
        color: ${modernColors.foreground};
        cursor: pointer;
        transition: ${transitions.colors};
        box-shadow: ${shadows.xs};
      }

      .button:hover:not(:disabled) {
        background: ${modernColors.accent};
      }

      .button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .button[data-active="true"] {
        background: ${modernColors.primary};
        color: ${modernColors.primaryForeground};
        border-color: ${modernColors.primary};
      }

      .ellipsis {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
      }
    `));

    const container = document.createElement('div');
    container.style.display = 'contents';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'button';
    prevBtn.textContent = '‹';
    prevBtn.disabled = this.currentPage === 1;
    prevBtn.addEventListener('click', () => this.handlePageClick(this.currentPage - 1));
    container.appendChild(prevBtn);

    // Page numbers
    const pages = this.getPageNumbers();
    pages.forEach((page, index) => {
      if (page === 'ellipsis') {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'ellipsis';
        ellipsis.textContent = '...';
        container.appendChild(ellipsis);
      } else {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'button';
        pageBtn.textContent = page.toString();
        pageBtn.setAttribute('data-active', (page === this.currentPage).toString());
        pageBtn.addEventListener('click', () => this.handlePageClick(page));
        container.appendChild(pageBtn);
      }
    });

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'button';
    nextBtn.textContent = '›';
    nextBtn.disabled = this.currentPage === this.totalPages;
    nextBtn.addEventListener('click', () => this.handlePageClick(this.currentPage + 1));
    container.appendChild(nextBtn);

    this.shadow.appendChild(container);
  }
}

customElements.define('eva-pagination', EVAPagination);
