import './style.css';
import { PerformanceDashboard } from './dashboard';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h1>🚀 EVA Sovereign UI</h1>
      <p>Performance Monitoring Dashboard</p>
    </header>
    <div id="dashboard-content"></div>
  </div>
`;

const dashboard = new PerformanceDashboard();
dashboard.mount('#dashboard-content');
