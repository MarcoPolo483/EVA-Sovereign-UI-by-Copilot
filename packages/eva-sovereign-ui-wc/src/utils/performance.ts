/**
 * Performance Monitoring and Optimization Utilities
 * 
 * Provides tools for:
 * - Web Vitals measurement
 * - Component performance tracking
 * - Lazy loading utilities
 * - Performance budgets
 * - Memory leak detection
 * 
 * @module performance
 */

// ============================================================================
// Web Vitals Measurement
// ============================================================================

/**
 * Web Vitals metrics interface
 */
export interface WebVitalsMetrics {
  /** Largest Contentful Paint (ms) - Target: <2.5s */
  LCP: number;
  /** First Input Delay (ms) - Target: <100ms */
  FID: number;
  /** Cumulative Layout Shift - Target: <0.1 */
  CLS: number;
  /** First Contentful Paint (ms) - Target: <1.8s */
  FCP: number;
  /** Time to Interactive (ms) - Target: <3.8s */
  TTI: number;
  /** Total Blocking Time (ms) - Target: <200ms */
  TBT: number;
}

/**
 * Web Vitals thresholds
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  FID: { good: 100, needsImprovement: 300 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTI: { good: 3800, needsImprovement: 7300 },
  TBT: { good: 200, needsImprovement: 600 },
} as const;

/**
 * Measure Web Vitals using Performance Observer API
 */
export class WebVitalsMonitor {
  private metrics: Partial<WebVitalsMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private callbacks: Array<(metrics: Partial<WebVitalsMetrics>) => void> = [];

  constructor() {
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
  }

  /**
   * Observe Largest Contentful Paint
   */
  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
          renderTime: number;
          loadTime: number;
        };
        this.metrics.LCP = lastEntry.renderTime || lastEntry.loadTime;
        this.notifyCallbacks();
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      // LCP not supported
    }
  }

  /**
   * Observe First Input Delay
   */
  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
          this.notifyCallbacks();
        });
      });
      observer.observe({ type: 'first-input', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      // FID not supported
    }
  }

  /**
   * Observe Cumulative Layout Shift
   */
  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.metrics.CLS = clsValue;
            this.notifyCallbacks();
          }
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      // CLS not supported
    }
  }

  /**
   * Observe First Contentful Paint
   */
  private observeFCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime;
            this.notifyCallbacks();
          }
        });
      });
      observer.observe({ type: 'paint', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      // FCP not supported
    }
  }

  /**
   * Register callback for metrics updates
   */
  onMetricsUpdate(callback: (metrics: Partial<WebVitalsMetrics>) => void): void {
    this.callbacks.push(callback);
  }

  /**
   * Notify all registered callbacks
   */
  private notifyCallbacks(): void {
    this.callbacks.forEach((callback) => callback(this.metrics));
  }

  /**
   * Get current metrics
   */
  getMetrics(): Partial<WebVitalsMetrics> {
    return { ...this.metrics };
  }

  /**
   * Evaluate metrics against thresholds
   */
  evaluateMetrics(): Record<keyof WebVitalsMetrics, 'good' | 'needs-improvement' | 'poor'> {
    const evaluation: any = {};

    for (const [metric, value] of Object.entries(this.metrics)) {
      const threshold = WEB_VITALS_THRESHOLDS[metric as keyof WebVitalsMetrics];
      if (!threshold || value === undefined) continue;

      if (value <= threshold.good) {
        evaluation[metric] = 'good';
      } else if (value <= threshold.needsImprovement) {
        evaluation[metric] = 'needs-improvement';
      } else {
        evaluation[metric] = 'poor';
      }
    }

    return evaluation;
  }

  /**
   * Clean up observers
   */
  disconnect(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
    this.callbacks = [];
  }
}

// ============================================================================
// Component Performance Tracking
// ============================================================================

/**
 * Component performance metrics
 */
export interface ComponentMetrics {
  name: string;
  initTime: number;
  renderTime: number;
  updateCount: number;
  lastUpdateTime: number;
  memoryUsage?: number;
}

/**
 * Track component performance
 */
export class ComponentPerformanceTracker {
  private metrics = new Map<string, ComponentMetrics>();
  private marks = new Map<string, number>();

  /**
   * Mark start of operation
   */
  markStart(componentName: string, operation: string): void {
    const key = `${componentName}:${operation}`;
    this.marks.set(key, performance.now());
  }

  /**
   * Mark end of operation and record duration
   */
  markEnd(componentName: string, operation: string): number {
    const key = `${componentName}:${operation}`;
    const startTime = this.marks.get(key);
    if (!startTime) return 0;

    const duration = performance.now() - startTime;
    this.marks.delete(key);

    // Update metrics
    let metrics = this.metrics.get(componentName);
    if (!metrics) {
      metrics = {
        name: componentName,
        initTime: 0,
        renderTime: 0,
        updateCount: 0,
        lastUpdateTime: 0,
      };
      this.metrics.set(componentName, metrics);
    }

    if (operation === 'init') {
      metrics.initTime = duration;
    } else if (operation === 'render') {
      metrics.renderTime = duration;
    } else if (operation === 'update') {
      metrics.updateCount++;
      metrics.lastUpdateTime = duration;
    }

    return duration;
  }

  /**
   * Get metrics for a component
   */
  getMetrics(componentName: string): ComponentMetrics | undefined {
    return this.metrics.get(componentName);
  }

  /**
   * Get all metrics
   */
  getAllMetrics(): ComponentMetrics[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Get slow components (render time > threshold)
   */
  getSlowComponents(thresholdMs: number = 16): ComponentMetrics[] {
    return this.getAllMetrics().filter(
      (m) => m.renderTime > thresholdMs || m.lastUpdateTime > thresholdMs
    );
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
    this.marks.clear();
  }

  /**
   * Export metrics as JSON
   */
  export(): string {
    return JSON.stringify(this.getAllMetrics(), null, 2);
  }
}

// ============================================================================
// Lazy Loading Utilities
// ============================================================================

/**
 * Options for lazy loading
 */
export interface LazyLoadOptions {
  /** Root element for intersection observer */
  root?: Element | null;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Threshold for intersection observer */
  threshold?: number | number[];
  /** Callback when element becomes visible */
  onVisible?: (element: Element) => void;
  /** Callback when element becomes hidden */
  onHidden?: (element: Element) => void;
}

/**
 * Lazy load elements using Intersection Observer
 */
export class LazyLoader {
  private observer: IntersectionObserver;
  private elements = new WeakMap<Element, LazyLoadOptions>();

  constructor(options: LazyLoadOptions = {}) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementOptions = this.elements.get(entry.target);
          if (!elementOptions) return;

          if (entry.isIntersecting) {
            elementOptions.onVisible?.(entry.target);
          } else {
            elementOptions.onHidden?.(entry.target);
          }
        });
      },
      {
        root: options.root,
        rootMargin: options.rootMargin || '50px',
        threshold: options.threshold || 0,
      }
    );
  }

  /**
   * Observe an element
   */
  observe(element: Element, options: LazyLoadOptions = {}): void {
    this.elements.set(element, options);
    this.observer.observe(element);
  }

  /**
   * Unobserve an element
   */
  unobserve(element: Element): void {
    this.elements.delete(element);
    this.observer.unobserve(element);
  }

  /**
   * Disconnect observer
   */
  disconnect(): void {
    this.observer.disconnect();
  }
}

/**
 * Lazy load a component when it becomes visible
 */
export function lazyLoadComponent(
  element: HTMLElement,
  componentLoader: () => Promise<void>,
  options: LazyLoadOptions = {}
): () => void {
  let loaded = false;
  const loader = new LazyLoader({
    ...options,
    onVisible: async (el) => {
      if (loaded) return;
      loaded = true;
      await componentLoader();
      options.onVisible?.(el);
    },
  });

  loader.observe(element, options);

  return () => loader.disconnect();
}

// ============================================================================
// Performance Budgets
// ============================================================================

/**
 * Performance budget configuration
 */
export interface PerformanceBudget {
  /** Maximum bundle size in KB */
  maxBundleSize: number;
  /** Maximum component init time in ms */
  maxInitTime: number;
  /** Maximum component render time in ms */
  maxRenderTime: number;
  /** Maximum memory usage in MB */
  maxMemoryUsage: number;
  /** Maximum LCP in ms */
  maxLCP: number;
  /** Maximum FID in ms */
  maxFID: number;
  /** Maximum CLS */
  maxCLS: number;
}

/**
 * Default performance budget (good performance targets)
 */
export const DEFAULT_PERFORMANCE_BUDGET: PerformanceBudget = {
  maxBundleSize: 200, // 200 KB
  maxInitTime: 50, // 50ms per component
  maxRenderTime: 16, // 16ms (60fps)
  maxMemoryUsage: 50, // 50 MB
  maxLCP: 2500, // 2.5s
  maxFID: 100, // 100ms
  maxCLS: 0.1, // 0.1
};

/**
 * Check if performance metrics meet budget
 */
export class PerformanceBudgetMonitor {
  constructor(private budget: PerformanceBudget = DEFAULT_PERFORMANCE_BUDGET) {}

  /**
   * Check component metrics against budget
   */
  checkComponent(metrics: ComponentMetrics): {
    passed: boolean;
    violations: string[];
  } {
    const violations: string[] = [];

    if (metrics.initTime > this.budget.maxInitTime) {
      violations.push(
        `Init time ${metrics.initTime.toFixed(2)}ms exceeds budget ${this.budget.maxInitTime}ms`
      );
    }

    if (metrics.renderTime > this.budget.maxRenderTime) {
      violations.push(
        `Render time ${metrics.renderTime.toFixed(2)}ms exceeds budget ${this.budget.maxRenderTime}ms`
      );
    }

    return {
      passed: violations.length === 0,
      violations,
    };
  }

  /**
   * Check Web Vitals against budget
   */
  checkWebVitals(metrics: Partial<WebVitalsMetrics>): {
    passed: boolean;
    violations: string[];
  } {
    const violations: string[] = [];

    if (metrics.LCP && metrics.LCP > this.budget.maxLCP) {
      violations.push(`LCP ${metrics.LCP.toFixed(0)}ms exceeds budget ${this.budget.maxLCP}ms`);
    }

    if (metrics.FID && metrics.FID > this.budget.maxFID) {
      violations.push(`FID ${metrics.FID.toFixed(0)}ms exceeds budget ${this.budget.maxFID}ms`);
    }

    if (metrics.CLS && metrics.CLS > this.budget.maxCLS) {
      violations.push(`CLS ${metrics.CLS.toFixed(3)} exceeds budget ${this.budget.maxCLS}`);
    }

    return {
      passed: violations.length === 0,
      violations,
    };
  }

  /**
   * Update budget
   */
  updateBudget(budget: Partial<PerformanceBudget>): void {
    this.budget = { ...this.budget, ...budget };
  }

  /**
   * Get current budget
   */
  getBudget(): PerformanceBudget {
    return { ...this.budget };
  }
}

// ============================================================================
// Memory Leak Detection
// ============================================================================

/**
 * Memory snapshot
 */
export interface MemorySnapshot {
  timestamp: number;
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

/**
 * Detect memory leaks
 */
export class MemoryLeakDetector {
  private snapshots: MemorySnapshot[] = [];
  private interval: number | null = null;

  /**
   * Start monitoring memory
   */
  startMonitoring(intervalMs: number = 5000): void {
    if (this.interval !== null) return;

    this.interval = window.setInterval(() => {
      this.takeSnapshot();
    }, intervalMs);

    // Take initial snapshot
    this.takeSnapshot();
  }

  /**
   * Stop monitoring
   */
  stopMonitoring(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  /**
   * Take a memory snapshot
   */
  takeSnapshot(): MemorySnapshot | null {
    if (!(performance as any).memory) {
      console.warn('Memory API not available (Chrome only with --enable-precise-memory-info)');
      return null;
    }

    const memory = (performance as any).memory;
    const snapshot: MemorySnapshot = {
      timestamp: Date.now(),
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };

    this.snapshots.push(snapshot);
    return snapshot;
  }

  /**
   * Analyze memory trends
   */
  analyze(): {
    trend: 'increasing' | 'stable' | 'decreasing';
    leakSuspected: boolean;
    averageGrowthPerSnapshot: number;
    totalGrowth: number;
  } {
    if (this.snapshots.length < 3) {
      return {
        trend: 'stable',
        leakSuspected: false,
        averageGrowthPerSnapshot: 0,
        totalGrowth: 0,
      };
    }

    const first = this.snapshots[0];
    const last = this.snapshots[this.snapshots.length - 1];
    const totalGrowth = last.usedJSHeapSize - first.usedJSHeapSize;
    const averageGrowthPerSnapshot = totalGrowth / (this.snapshots.length - 1);

    // Calculate trend
    let increasingCount = 0;
    for (let i = 1; i < this.snapshots.length; i++) {
      if (this.snapshots[i].usedJSHeapSize > this.snapshots[i - 1].usedJSHeapSize) {
        increasingCount++;
      }
    }

    const trend =
      increasingCount > this.snapshots.length * 0.7
        ? 'increasing'
        : increasingCount < this.snapshots.length * 0.3
          ? 'decreasing'
          : 'stable';

    // Suspect leak if continuously increasing by more than 1MB per snapshot
    const leakSuspected = trend === 'increasing' && averageGrowthPerSnapshot > 1024 * 1024;

    return {
      trend,
      leakSuspected,
      averageGrowthPerSnapshot,
      totalGrowth,
    };
  }

  /**
   * Get all snapshots
   */
  getSnapshots(): MemorySnapshot[] {
    return [...this.snapshots];
  }

  /**
   * Clear snapshots
   */
  clear(): void {
    this.snapshots = [];
  }

  /**
   * Export analysis as report
   */
  exportReport(): string {
    const analysis = this.analyze();
    const snapshots = this.snapshots;

    return `
Memory Leak Analysis Report
============================

Snapshots: ${snapshots.length}
Duration: ${snapshots.length > 0 ? ((snapshots[snapshots.length - 1].timestamp - snapshots[0].timestamp) / 1000).toFixed(0) : 0}s

Memory Trend: ${analysis.trend}
Leak Suspected: ${analysis.leakSuspected ? 'YES ⚠️' : 'No'}
Total Growth: ${(analysis.totalGrowth / 1024 / 1024).toFixed(2)} MB
Avg Growth/Snapshot: ${(analysis.averageGrowthPerSnapshot / 1024 / 1024).toFixed(2)} MB

Snapshots:
${snapshots
  .map(
    (s, i) =>
      `${i + 1}. ${new Date(s.timestamp).toLocaleTimeString()} - ${(s.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`
  )
  .join('\n')}
    `.trim();
  }
}

// ============================================================================
// Resource Loading Optimization
// ============================================================================

/**
 * Preload critical resources
 */
export function preloadResource(
  href: string,
  as: 'script' | 'style' | 'font' | 'image'
): void {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Prefetch resources for future navigation
 */
export function prefetchResource(href: string): void {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  waitMs: number
): (...args: Parameters<T>) => void {
  let timeout: number | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), waitMs);
  };
}

/**
 * Throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limitMs: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limitMs);
    }
  };
}

/**
 * Request idle callback with fallback
 */
export function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  // Fallback to setTimeout
  return window.setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => 50,
    } as IdleDeadline);
  }, 1) as unknown as number;
}

/**
 * Cancel idle callback
 */
export function cancelIdleCallback(id: number): void {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

// ============================================================================
// Export Global Instance
// ============================================================================

// Create global performance monitor
export const webVitalsMonitor = new WebVitalsMonitor();
export const componentTracker = new ComponentPerformanceTracker();
export const budgetMonitor = new PerformanceBudgetMonitor();

// Log metrics in development
if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
  webVitalsMonitor.onMetricsUpdate((metrics) => {
    console.log('[Performance] Web Vitals:', metrics);
    const evaluation = webVitalsMonitor.evaluateMetrics();
    console.log('[Performance] Evaluation:', evaluation);
  });
}
