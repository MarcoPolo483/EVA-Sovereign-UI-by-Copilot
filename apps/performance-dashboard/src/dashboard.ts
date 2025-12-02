import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
} from 'chart.js';

// Register Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement
);

interface PerformanceMetrics {
  bundleSize: {
    esm: number;
    cjs: number;
    dts: number;
    total: number;
  };
  testResults: {
    total: number;
    passed: number;
    failed: number;
    coverage: number;
  };
  buildTimes: {
    esm: number;
    cjs: number;
    dts: number;
  };
  runtime: {
    renderTime: number;
    memoryUsage: number;
    fps: number;
  };
}

export class PerformanceDashboard {
  private container: HTMLElement | null = null;
  private metrics: PerformanceMetrics;
  private charts: { [key: string]: Chart } = {};

  constructor() {
    this.metrics = this.loadMetrics();
  }

  private loadMetrics(): PerformanceMetrics {
    // These would typically come from actual performance tests
    // For now, using realistic sample data based on the actual project
    return {
      bundleSize: {
        esm: 156.2, // KB
        cjs: 162.8,
        dts: 89.4,
        total: 408.4,
      },
      testResults: {
        total: 1046,
        passed: 1046,
        failed: 0,
        coverage: 84,
      },
      buildTimes: {
        esm: 468, // ms
        cjs: 451,
        dts: 7642,
      },
      runtime: {
        renderTime: 12.5, // ms
        memoryUsage: 24.3, // MB
        fps: 60,
      },
    };
  }

  public mount(selector: string): void {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error(`Container ${selector} not found`);
    }

    this.render();
  }

  private render(): void {
    if (!this.container) return;

    this.container.innerHTML = `
      <!-- Key Metrics -->
      <div class="metrics-grid">
        ${this.renderMetricCard('Bundle Size', `${this.metrics.bundleSize.total.toFixed(1)} KB`, 'Total size (ESM + CJS + DTS)', 'neutral')}
        ${this.renderMetricCard('Test Pass Rate', `${((this.metrics.testResults.passed / this.metrics.testResults.total) * 100).toFixed(1)}%`, `${this.metrics.testResults.passed}/${this.metrics.testResults.total} passing`, 'positive')}
        ${this.renderMetricCard('Coverage', `${this.metrics.testResults.coverage}%`, 'Branch coverage', 'neutral')}
        ${this.renderMetricCard('Render Time', `${this.metrics.runtime.renderTime.toFixed(1)} ms`, 'Average component render', 'positive')}
        ${this.renderMetricCard('Memory Usage', `${this.metrics.runtime.memoryUsage.toFixed(1)} MB`, 'Runtime memory footprint', 'neutral')}
        ${this.renderMetricCard('FPS', `${this.metrics.runtime.fps}`, 'Frames per second', 'positive')}
      </div>

      <!-- Build Times Chart -->
      <div class="chart-container">
        <h2>📊 Build Performance</h2>
        <div class="chart-wrapper">
          <canvas id="buildTimesChart"></canvas>
        </div>
      </div>

      <!-- Bundle Sizes -->
      <div class="chart-container">
        <h2>📦 Bundle Analysis</h2>
        <div class="chart-wrapper">
          <canvas id="bundleSizeChart"></canvas>
        </div>
        <div class="bundle-sizes">
          ${this.renderBundleItem('ESM Build', this.metrics.bundleSize.esm, (this.metrics.bundleSize.esm * 0.35))}
          ${this.renderBundleItem('CJS Build', this.metrics.bundleSize.cjs, (this.metrics.bundleSize.cjs * 0.35))}
          ${this.renderBundleItem('TypeScript Defs', this.metrics.bundleSize.dts, (this.metrics.bundleSize.dts * 0.35))}
          ${this.renderBundleItem('Total Size', this.metrics.bundleSize.total, (this.metrics.bundleSize.total * 0.35))}
        </div>
      </div>

      <!-- Test Results -->
      <div class="test-results">
        <h2>✅ Test Results</h2>
        <div class="test-summary">
          <div class="test-stat passed">
            <div class="value">${this.metrics.testResults.passed}</div>
            <div class="label">Passed</div>
          </div>
          <div class="test-stat failed">
            <div class="value">${this.metrics.testResults.failed}</div>
            <div class="label">Failed</div>
          </div>
          <div class="test-stat">
            <div class="value">${this.metrics.testResults.total}</div>
            <div class="label">Total</div>
          </div>
          <div class="test-stat coverage">
            <div class="value">${this.metrics.testResults.coverage}%</div>
            <div class="label">Coverage</div>
          </div>
        </div>
      </div>
    `;

    // Create charts after DOM is ready
    requestAnimationFrame(() => {
      this.createBuildTimesChart();
      this.createBundleSizeChart();
    });
  }

  private renderMetricCard(title: string, value: string, subtitle: string, trend: 'positive' | 'negative' | 'neutral'): string {
    const trendIcon = trend === 'positive' ? '↑' : trend === 'negative' ? '↓' : '→';
    const trendClass = trend === 'positive' ? 'positive' : trend === 'negative' ? 'negative' : '';
    
    return `
      <div class="metric-card">
        <h3>${title}</h3>
        <div class="metric-value">${value}</div>
        <div class="metric-change ${trendClass}">${trendIcon} ${subtitle}</div>
      </div>
    `;
  }

  private renderBundleItem(name: string, size: number, gzip: number): string {
    return `
      <div class="bundle-item">
        <h4>${name}</h4>
        <div class="size">${size.toFixed(1)} KB</div>
        <div class="gzip">gzip: ${gzip.toFixed(1)} KB</div>
      </div>
    `;
  }

  private createBuildTimesChart(): void {
    const canvas = document.getElementById('buildTimesChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.charts['buildTimes'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['ESM', 'CJS', 'TypeScript'],
        datasets: [{
          label: 'Build Time (ms)',
          data: [
            this.metrics.buildTimes.esm,
            this.metrics.buildTimes.cjs,
            this.metrics.buildTimes.dts,
          ],
          backgroundColor: [
            'rgba(96, 165, 250, 0.8)',
            'rgba(167, 139, 250, 0.8)',
            'rgba(74, 222, 128, 0.8)',
          ],
          borderColor: [
            'rgba(96, 165, 250, 1)',
            'rgba(167, 139, 250, 1)',
            'rgba(74, 222, 128, 1)',
          ],
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.parsed?.y?.toFixed(0) || 0} ms`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              callback: (value) => `${value} ms`,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
        },
      },
    });
  }

  private createBundleSizeChart(): void {
    const canvas = document.getElementById('bundleSizeChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.charts['bundleSize'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['ESM', 'CJS', 'TypeScript Defs'],
        datasets: [
          {
            label: 'Raw Size (KB)',
            data: [
              this.metrics.bundleSize.esm,
              this.metrics.bundleSize.cjs,
              this.metrics.bundleSize.dts,
            ],
            backgroundColor: 'rgba(96, 165, 250, 0.6)',
            borderColor: 'rgba(96, 165, 250, 1)',
            borderWidth: 2,
          },
          {
            label: 'Gzipped (KB)',
            data: [
              this.metrics.bundleSize.esm * 0.35,
              this.metrics.bundleSize.cjs * 0.35,
              this.metrics.bundleSize.dts * 0.35,
            ],
            backgroundColor: 'rgba(167, 139, 250, 0.6)',
            borderColor: 'rgba(167, 139, 250, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.parsed?.y?.toFixed(1) || 0} KB`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: false,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              callback: (value) => `${value} KB`,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
        },
      },
    });
  }

  public destroy(): void {
    Object.values(this.charts).forEach(chart => chart.destroy());
    this.charts = {};
  }
}
