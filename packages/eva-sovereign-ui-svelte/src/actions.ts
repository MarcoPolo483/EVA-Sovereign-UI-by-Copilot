/**
 * Creates a reactive two-way binding for web component props
 * @param node - The web component element
 * @param binding - Object with value and onUpdate callback
 */
export function bind(node: HTMLElement, binding: { value: any; onUpdate?: (value: any) => void }) {
  const { value, onUpdate } = binding;
  
  // Set initial value
  if (value !== undefined) {
    (node as any).value = value;
  }
  
  // Listen for changes
  const handleInput = (e: Event) => {
    const target = e.target as any;
    const newValue = target.value ?? target.checked ?? (e as any).detail?.value;
    onUpdate?.(newValue);
  };
  
  const handleChange = (e: Event) => {
    const target = e.target as any;
    const newValue = target.value ?? target.checked ?? (e as any).detail?.value;
    onUpdate?.(newValue);
  };
  
  node.addEventListener('input', handleInput);
  node.addEventListener('change', handleChange);
  
  return {
    update(newBinding: { value: any; onUpdate?: (value: any) => void }) {
      if (newBinding.value !== undefined && newBinding.value !== (node as any).value) {
        (node as any).value = newBinding.value;
      }
    },
    destroy() {
      node.removeEventListener('input', handleInput);
      node.removeEventListener('change', handleChange);
    }
  };
}

/**
 * Creates a checked binding for checkbox/switch components
 * @param node - The web component element
 * @param binding - Object with checked value and onUpdate callback
 */
export function bindChecked(node: HTMLElement, binding: { checked: boolean; onUpdate?: (checked: boolean) => void }) {
  const { checked, onUpdate } = binding;
  
  // Set initial value
  if (checked !== undefined) {
    (node as any).checked = checked;
  }
  
  // Listen for changes
  const handleChange = (e: Event) => {
    const target = e.target as any;
    const newChecked = target.checked;
    onUpdate?.(newChecked);
  };
  
  node.addEventListener('change', handleChange);
  
  return {
    update(newBinding: { checked: boolean; onUpdate?: (checked: boolean) => void }) {
      if (newBinding.checked !== undefined && newBinding.checked !== (node as any).checked) {
        (node as any).checked = newBinding.checked;
      }
    },
    destroy() {
      node.removeEventListener('change', handleChange);
    }
  };
}

/**
 * Forward DOM events from web components
 * @param node - The web component element
 * @param events - Array of event names to forward
 */
export function forwardEvents(node: HTMLElement, events: string[]) {
  const listeners: Array<[string, EventListener]> = [];
  
  events.forEach((eventName) => {
    const listener = (e: Event) => {
      node.dispatchEvent(new CustomEvent(eventName, {
        detail: (e as any).detail,
        bubbles: true,
        cancelable: true
      }));
    };
    node.addEventListener(eventName, listener);
    listeners.push([eventName, listener]);
  });
  
  return {
    destroy() {
      listeners.forEach(([eventName, listener]) => {
        node.removeEventListener(eventName, listener);
      });
    }
  };
}
