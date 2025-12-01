import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/**
 * Chart data point structure
 */
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

/**
 * Chart data structure
 */
export interface ChartData {
  labels?: string[];
  datasets: {
    label: string;
    labelFr?: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
  }[];
}

/**
 * EVA GC Charts Pattern
 * 
 * Accessible chart visualizations (bar, line, pie) with
 * responsive design and accessible data table fallback.
 * 
 * @element eva-gc-chart
 * 
 * @fires data-point-click - Dispatched when a data point is clicked
 */
@customElement('eva-gc-chart')
export class EvaGCChart extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .chart-container {
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      background: white;
      padding: 24px;
    }

    .chart-header {
      margin-bottom: 24px;
    }

    .chart-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 8px 0;
    }

    .chart-description {
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
      margin: 0;
    }

    .chart-canvas-wrapper {
      position: relative;
      width: 100%;
      min-height: 300px;
      margin-bottom: 24px;
    }

    canvas {
      max-width: 100%;
      height: auto;
    }

    .chart-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin-top: 20px;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }

    .legend-color {
      width: 20px;
      height: 20px;
      border-radius: 3px;
    }

    .data-table-toggle {
      margin-top: 16px;
      text-align: center;
    }

    .toggle-button {
      padding: 8px 16px;
      background: white;
      border: 2px solid var(--gc-color-primary, #26374A);
      color: var(--gc-color-primary, #26374A);
      border-radius: 4px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .toggle-button:hover {
      background: var(--gc-color-primary, #26374A);
      color: white;
    }

    .toggle-button:focus-visible {
      outline: 3px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    .data-table th,
    .data-table td {
      padding: 12px;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      text-align: left;
    }

    .data-table th {
      background: var(--gc-color-background-light, #f5f5f5);
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
    }

    .data-table td {
      color: var(--gc-color-text-primary, #333333);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 768px) {
      .chart-canvas-wrapper {
        min-height: 250px;
      }

      .chart-legend {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @media print {
      .toggle-button {
        display: none;
      }

      .data-table {
        display: table !important;
      }
    }
  `;

  @property({ type: String })
  type: 'bar' | 'line' | 'pie' = 'bar';

  @property({ type: Object })
  data!: ChartData;

  @property({ type: String })
  title = '';

  @property({ type: String, attribute: 'title-fr' })
  titleFr = '';

  @property({ type: String })
  description = '';

  @property({ type: String, attribute: 'description-fr' })
  descriptionFr = '';

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: Boolean, attribute: 'show-legend' })
  showLegend = true;

  @property({ type: Boolean, attribute: 'show-data-table' })
  showDataTable = false;

  @state()
  private isDataTableVisible = false;

  @query('canvas')
  private canvas!: HTMLCanvasElement;

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get currentDescription(): string {
    return this.lang === 'fr' && this.descriptionFr ? this.descriptionFr : this.description;
  }

  override firstUpdated() {
    this.renderChart();
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('data') || changedProperties.has('type')) {
      this.renderChart();
    }
  }

  private renderChart() {
    if (!this.canvas || !this.data) return;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Set canvas size
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = 300 * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Simple chart rendering (production would use a library like Chart.js or D3.js)
    switch (this.type) {
      case 'bar':
        this.renderBarChart(ctx, rect.width, 300);
        break;
      case 'line':
        this.renderLineChart(ctx, rect.width, 300);
        break;
      case 'pie':
        this.renderPieChart(ctx, rect.width, 300);
        break;
    }
  }

  private renderBarChart(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const dataset = this.data.datasets[0];
    const maxValue = Math.max(...dataset.data);
    const barWidth = chartWidth / dataset.data.length;

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw bars
    dataset.data.forEach((value, index) => {
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding + index * barWidth + barWidth * 0.1;
      const y = height - padding - barHeight;
      const w = barWidth * 0.8;

      ctx.fillStyle = Array.isArray(dataset.backgroundColor) 
        ? dataset.backgroundColor[index] || '#26374A'
        : dataset.backgroundColor || '#26374A';
      ctx.fillRect(x, y, w, barHeight);

      // Draw label
      if (this.data.labels && this.data.labels[index]) {
        ctx.fillStyle = '#333';
        ctx.font = '12px Lato, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.data.labels[index], x + w / 2, height - padding + 20);
      }

      // Draw value
      ctx.fillStyle = '#333';
      ctx.font = 'bold 12px Lato, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(value), x + w / 2, y - 5);
    });
  }

  private renderLineChart(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const dataset = this.data.datasets[0];
    const maxValue = Math.max(...dataset.data);
    const pointSpacing = chartWidth / (dataset.data.length - 1);

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw line
    ctx.strokeStyle = dataset.borderColor || '#26374A';
    ctx.lineWidth = 3;
    ctx.beginPath();
    dataset.data.forEach((value, index) => {
      const x = padding + index * pointSpacing;
      const y = height - padding - (value / maxValue) * chartHeight;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw points
    dataset.data.forEach((value, index) => {
      const x = padding + index * pointSpacing;
      const y = height - padding - (value / maxValue) * chartHeight;
      
      ctx.fillStyle = dataset.borderColor || '#26374A';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw label
      if (this.data.labels && this.data.labels[index]) {
        ctx.fillStyle = '#333';
        ctx.font = '12px Lato, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.data.labels[index], x, height - padding + 20);
      }
    });
  }

  private renderPieChart(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const dataset = this.data.datasets[0];
    const total = dataset.data.reduce((sum, val) => sum + val, 0);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;

    let currentAngle = -Math.PI / 2;

    dataset.data.forEach((value, index) => {
      const sliceAngle = (value / total) * Math.PI * 2;
      
      ctx.fillStyle = Array.isArray(dataset.backgroundColor)
        ? dataset.backgroundColor[index] || `hsl(${index * 360 / dataset.data.length}, 70%, 60%)`
        : dataset.backgroundColor || `hsl(${index * 360 / dataset.data.length}, 70%, 60%)`;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      // Draw percentage
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
      const percentage = Math.round((value / total) * 100);
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Lato, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${percentage}%`, labelX, labelY);

      currentAngle += sliceAngle;
    });
  }

  private toggleDataTable() {
    this.isDataTableVisible = !this.isDataTableVisible;
  }

  override render() {
    const toggleText = this.isDataTableVisible
      ? (this.lang === 'fr' ? 'Masquer le tableau' : 'Hide data table')
      : (this.lang === 'fr' ? 'Afficher le tableau' : 'Show data table');

    return html`
      <div class="chart-container">
        ${this.currentTitle ? html`
          <div class="chart-header">
            <h2 class="chart-title">${this.currentTitle}</h2>
            ${this.currentDescription ? html`
              <p class="chart-description">${this.currentDescription}</p>
            ` : ''}
          </div>
        ` : ''}

        <div class="chart-canvas-wrapper" role="img" aria-label="${this.currentTitle}">
          <canvas></canvas>
          <div class="visually-hidden">
            ${this.lang === 'fr' ? 'Graphique montrant' : 'Chart showing'} ${this.currentTitle}. 
            ${this.lang === 'fr' ? 'Voir le tableau de données ci-dessous pour les détails.' : 'See data table below for details.'}
          </div>
        </div>

        ${this.showLegend && this.data.labels ? html`
          <div class="chart-legend" role="list" aria-label="${this.lang === 'fr' ? 'Légende du graphique' : 'Chart legend'}">
            ${this.data.labels.map((label, index) => {
              const dataset = this.data.datasets[0];
              const color = Array.isArray(dataset.backgroundColor)
                ? dataset.backgroundColor[index] || `hsl(${index * 360 / this.data.labels!.length}, 70%, 60%)`
                : dataset.backgroundColor || '#26374A';
              
              return html`
                <div class="legend-item" role="listitem">
                  <span class="legend-color" style="background-color: ${color}"></span>
                  <span>${label}</span>
                </div>
              `;
            })}
          </div>
        ` : ''}

        ${this.showDataTable ? html`
          <div class="data-table-toggle">
            <button
              class="toggle-button"
              @click="${this.toggleDataTable}"
              aria-expanded="${this.isDataTableVisible}"
            >
              ${toggleText}
            </button>
          </div>

          ${this.isDataTableVisible ? html`
            <table class="data-table">
              <thead>
                <tr>
                  <th>${this.lang === 'fr' ? 'Label' : 'Label'}</th>
                  ${this.data.datasets.map(dataset => html`
                    <th>${this.lang === 'fr' && dataset.labelFr ? dataset.labelFr : dataset.label}</th>
                  `)}
                </tr>
              </thead>
              <tbody>
                ${this.data.labels?.map((label, index) => html`
                  <tr>
                    <td>${label}</td>
                    ${this.data.datasets.map(dataset => html`
                      <td>${dataset.data[index]}</td>
                    `)}
                  </tr>
                `)}
              </tbody>
            </table>
          ` : ''}
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-chart': EvaGCChart;
  }
}
