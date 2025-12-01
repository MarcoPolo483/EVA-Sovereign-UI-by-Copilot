import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

/**
 * Column definition for data table
 */
export interface DataTableColumn {
  key: string;
  label: string;
  labelFr?: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

/**
 * EVA GC Data Table Pattern
 * 
 * Advanced data table with sorting, filtering, pagination,
 * and CSV export capabilities.
 * 
 * @element eva-gc-data-table
 * 
 * @fires row-click - Dispatched when a row is clicked
 * @fires sort-change - Dispatched when sort order changes
 * @fires page-change - Dispatched when page changes
 */
@customElement('eva-gc-data-table')
export class EvaGCDataTable extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .table-container {
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      background: white;
    }

    .table-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .table-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0;
    }

    .table-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .search-input {
      padding: 8px 12px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      font-size: 14px;
      min-width: 200px;
    }

    .search-input:focus {
      outline: 3px solid var(--gc-color-focus, #0073e6);
      outline-offset: 1px;
    }

    .export-button {
      padding: 8px 16px;
      background: var(--gc-color-primary, #26374A);
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .export-button:hover {
      background: var(--gc-color-primary-dark, #1a2633);
    }

    .export-button:focus-visible {
      outline: 3px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .table-wrapper {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background: var(--gc-color-background-light, #f5f5f5);
    }

    th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      border-bottom: 2px solid var(--gc-color-primary, #26374A);
      white-space: nowrap;
    }

    th.sortable {
      cursor: pointer;
      user-select: none;
    }

    th.sortable:hover {
      background: var(--gc-color-primary-light, #e8f4ff);
    }

    .sort-indicator {
      display: inline-block;
      margin-left: 8px;
      font-size: 12px;
      opacity: 0.5;
    }

    th.sorted .sort-indicator {
      opacity: 1;
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
      color: var(--gc-color-text-primary, #333333);
    }

    tbody tr {
      transition: background 0.2s ease;
    }

    tbody tr:hover {
      background: var(--gc-color-background-light, #f5f5f5);
    }

    tbody tr.clickable {
      cursor: pointer;
    }

    tbody tr.clickable:focus-within {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: -2px;
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }

    .table-footer {
      padding: 16px 20px;
      border-top: 1px solid var(--gc-color-border-default, #e0e0e0);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .pagination-info {
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
    }

    .pagination-controls {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .pagination-button {
      padding: 8px 12px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      background: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 700;
    }

    .pagination-button:hover:not(:disabled) {
      background: var(--gc-color-primary-light, #e8f4ff);
      border-color: var(--gc-color-primary, #26374A);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button:focus-visible {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .page-size-selector {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }

    .page-size-selector select {
      padding: 6px 8px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
    }

    .empty-state {
      padding: 40px 20px;
      text-align: center;
      color: var(--gc-color-text-secondary, #666666);
    }

    @media (max-width: 768px) {
      .table-header,
      .table-footer {
        flex-direction: column;
        align-items: stretch;
      }

      .search-input {
        width: 100%;
      }

      .pagination-controls {
        justify-content: center;
      }
    }

    @media print {
      .table-header,
      .table-footer,
      .export-button {
        display: none;
      }

      .table-wrapper {
        overflow: visible;
      }
    }
  `;

  @property({ type: Array })
  columns: DataTableColumn[] = [];

  @property({ type: Array })
  data: Record<string, unknown>[] = [];

  @property({ type: String })
  title = '';

  @property({ type: String, attribute: 'title-fr' })
  titleFr = '';

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: Boolean })
  sortable = true;

  @property({ type: Boolean })
  filterable = true;

  @property({ type: Boolean })
  paginated = true;

  @property({ type: Number, attribute: 'page-size' })
  pageSize = 10;

  @property({ type: Boolean, attribute: 'export-csv' })
  exportCsv = true;

  @property({ type: Boolean, attribute: 'row-clickable' })
  rowClickable = false;

  @state()
  private currentPage = 1;

  @state()
  private sortColumn = '';

  @state()
  private sortDirection: 'asc' | 'desc' = 'asc';

  @state()
  private filterText = '';

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get filteredData(): Record<string, unknown>[] {
    if (!this.filterText) return this.data;

    const searchLower = this.filterText.toLowerCase();
    return this.data.filter(row => {
      return this.columns.some(col => {
        const value = String(row[col.key] || '').toLowerCase();
        return value.includes(searchLower);
      });
    });
  }

  private get sortedData(): Record<string, unknown>[] {
    if (!this.sortColumn) return this.filteredData;

    return [...this.filteredData].sort((a, b) => {
      const aVal = a[this.sortColumn];
      const bVal = b[this.sortColumn];

      if (aVal === bVal) return 0;
      
      let result = 0;
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        result = aVal - bVal;
      } else {
        result = String(aVal).localeCompare(String(bVal));
      }

      return this.sortDirection === 'asc' ? result : -result;
    });
  }

  private get paginatedData(): Record<string, unknown>[] {
    if (!this.paginated) return this.sortedData;

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.sortedData.slice(start, end);
  }

  private get totalPages(): number {
    return Math.ceil(this.sortedData.length / this.pageSize);
  }

  private handleSort(column: DataTableColumn) {
    if (!column.sortable && !this.sortable) return;

    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }

    this.currentPage = 1;
    this.dispatchEvent(new CustomEvent('sort-change', {
      detail: { column: this.sortColumn, direction: this.sortDirection },
      bubbles: true,
      composed: true
    }));
  }

  private handleFilter(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    this.filterText = input.value;
    this.currentPage = 1;
  }

  private handlePageChange(page: number) {
    this.currentPage = page;
    this.dispatchEvent(new CustomEvent('page-change', {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  private handlePageSizeChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.pageSize = Number(select.value);
    this.currentPage = 1;
  }

  private handleRowClick(row: Record<string, unknown>, index: number) {
    if (!this.rowClickable) return;

    this.dispatchEvent(new CustomEvent('row-click', {
      detail: { row, index },
      bubbles: true,
      composed: true
    }));
  }

  private exportToCSV() {
    const headers = this.columns.map(col => 
      this.lang === 'fr' && col.labelFr ? col.labelFr : col.label
    );
    
    const rows = this.sortedData.map(row => 
      this.columns.map(col => {
        const value = row[col.key];
        const str = String(value || '');
        // Escape quotes and wrap in quotes if contains comma, quote, or newline
        return str.includes(',') || str.includes('"') || str.includes('\n')
          ? `"${str.replace(/"/g, '""')}"`
          : str;
      })
    );

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${this.currentTitle || 'data'}.csv`;
    link.click();
  }

  override render() {
    const searchPlaceholder = this.lang === 'fr' ? 'Rechercher...' : 'Search...';
    const exportLabel = this.lang === 'fr' ? 'Exporter CSV' : 'Export CSV';
    const emptyMessage = this.lang === 'fr' ? 'Aucune donnée disponible' : 'No data available';
    const showingText = this.lang === 'fr' ? 'Affichage' : 'Showing';
    const ofText = this.lang === 'fr' ? 'sur' : 'of';
    const prevText = this.lang === 'fr' ? 'Précédent' : 'Previous';
    const nextText = this.lang === 'fr' ? 'Suivant' : 'Next';
    const rowsPerPageText = this.lang === 'fr' ? 'Lignes par page :' : 'Rows per page:';

    return html`
      <div class="table-container">
        <div class="table-header">
          ${this.currentTitle ? html`
            <h2 class="table-title">${this.currentTitle}</h2>
          ` : ''}
          <div class="table-actions">
            ${this.filterable ? html`
              <input
                type="text"
                class="search-input"
                placeholder="${searchPlaceholder}"
                @input="${this.handleFilter}"
                aria-label="${searchPlaceholder}"
              />
            ` : ''}
            ${this.exportCsv ? html`
              <button
                class="export-button"
                @click="${this.exportToCSV}"
                aria-label="${exportLabel}"
              >
                ${exportLabel}
              </button>
            ` : ''}
          </div>
        </div>

        <div class="table-wrapper">
          <table role="table">
            <thead>
              <tr>
                ${this.columns.map(col => {
                  const isSortable = col.sortable !== false && this.sortable;
                  const isSorted = this.sortColumn === col.key;
                  const label = this.lang === 'fr' && col.labelFr ? col.labelFr : col.label;
                  
                  return html`
                    <th
                      class="${isSortable ? 'sortable' : ''} ${isSorted ? 'sorted' : ''}"
                      style="${col.width ? `width: ${col.width}` : ''}"
                      @click="${isSortable ? () => this.handleSort(col) : null}"
                      role="columnheader"
                      aria-sort="${isSorted ? this.sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'}"
                    >
                      ${label}
                      ${isSortable ? html`
                        <span class="sort-indicator">
                          ${isSorted ? (this.sortDirection === 'asc' ? '▲' : '▼') : '▲▼'}
                        </span>
                      ` : ''}
                    </th>
                  `;
                })}
              </tr>
            </thead>
            <tbody>
              ${this.paginatedData.length === 0 ? html`
                <tr>
                  <td colspan="${this.columns.length}" class="empty-state">
                    ${emptyMessage}
                  </td>
                </tr>
              ` : repeat(this.paginatedData, (row, index) => html`
                <tr
                  class="${this.rowClickable ? 'clickable' : ''}"
                  @click="${() => this.handleRowClick(row, index)}"
                  tabindex="${this.rowClickable ? '0' : ''}"
                >
                  ${this.columns.map(col => html`
                    <td class="${col.align ? `text-${col.align}` : ''}">
                      ${row[col.key]}
                    </td>
                  `)}
                </tr>
              `)}
            </tbody>
          </table>
        </div>

        ${this.paginated && this.sortedData.length > 0 ? html`
          <div class="table-footer">
            <div class="pagination-info">
              ${showingText} ${(this.currentPage - 1) * this.pageSize + 1}-${Math.min(this.currentPage * this.pageSize, this.sortedData.length)} ${ofText} ${this.sortedData.length}
            </div>
            <div class="pagination-controls">
              <div class="page-size-selector">
                <label for="page-size">${rowsPerPageText}</label>
                <select id="page-size" @change="${this.handlePageSizeChange}">
                  <option value="10" ?selected="${this.pageSize === 10}">10</option>
                  <option value="25" ?selected="${this.pageSize === 25}">25</option>
                  <option value="50" ?selected="${this.pageSize === 50}">50</option>
                  <option value="100" ?selected="${this.pageSize === 100}">100</option>
                </select>
              </div>
              <button
                class="pagination-button"
                ?disabled="${this.currentPage === 1}"
                @click="${() => this.handlePageChange(this.currentPage - 1)}"
                aria-label="${prevText}"
              >
                ${prevText}
              </button>
              <span>${this.currentPage} / ${this.totalPages}</span>
              <button
                class="pagination-button"
                ?disabled="${this.currentPage === this.totalPages}"
                @click="${() => this.handlePageChange(this.currentPage + 1)}"
                aria-label="${nextText}"
              >
                ${nextText}
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-data-table': EvaGCDataTable;
  }
}
