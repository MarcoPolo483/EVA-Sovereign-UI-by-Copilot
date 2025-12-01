export function waitNextFrame(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

export async function settle(times = 2): Promise<void> {
  for (let i = 0; i < times; i++) {
    await waitNextFrame();
  }
}

export function dispatchKey(target: EventTarget, key: string, options: Partial<KeyboardEventInit> = {}): void {
  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    cancelable: true,
    ...options,
  });
  (target as HTMLElement).dispatchEvent(event);
}

export function dispatchClick(target: EventTarget, options: Partial<MouseEventInit> = {}): void {
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    ...options,
  });
  (target as HTMLElement).dispatchEvent(event);
}

export function queryShadow<T extends Element = Element>(el: Element | ShadowRoot | null | undefined, selector: string): T | null {
  if (!el) return null;
  const root = (el as Element).shadowRoot ?? (el as ShadowRoot);
  return root ? (root.querySelector(selector) as T | null) : null;
}

export function queryAllShadow<T extends Element = Element>(el: Element | ShadowRoot | null | undefined, selector: string): T[] {
  if (!el) return [];
  const root = (el as Element).shadowRoot ?? (el as ShadowRoot);
  return root ? (Array.from(root.querySelectorAll(selector)) as T[]) : [];
}
