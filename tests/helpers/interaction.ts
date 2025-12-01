export function dispatchKey(target: EventTarget, key: string, options: Partial<KeyboardEventInit> = {}) {
  const evt = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...options });
  (target as HTMLElement).dispatchEvent(evt);
}

export function dispatchClick(target: EventTarget, options: MouseEventInit = { bubbles: true }) {
  const evt = new MouseEvent('click', { bubbles: true, cancelable: true, ...options });
  (target as HTMLElement).dispatchEvent(evt);
}

export function waitNextFrame(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

export async function settle(): Promise<void> {
  await Promise.resolve();
  await waitNextFrame();
}

export function queryShadow<T extends Element = Element>(root: ShadowRoot | null | undefined, selector: string): T | null {
  if (!root) return null;
  return root.querySelector(selector) as T | null;
}

export function queryAllShadow<T extends Element = Element>(root: ShadowRoot | null | undefined, selector: string): T[] {
  if (!root) return [];
  return Array.from(root.querySelectorAll(selector)) as T[];
}