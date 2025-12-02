import { defineComponent, h, type PropType, type Ref } from 'vue';

/**
 * Creates a Vue component wrapper for a Web Component
 * @param tagName - The custom element tag name
 * @param events - Array of event names to emit
 * @param vModel - Configuration for v-model support
 */
export function createComponent(
  tagName: string,
  events: string[] = [],
  vModel?: {
    prop: string;
    event: string;
  }
) {
  return defineComponent({
    name: tagName
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(''),
    
    props: {
      // Accept any props to pass to the web component
      ...(vModel ? {
        [vModel.prop]: {
          type: [String, Boolean, Number, Array, Object] as PropType<any>,
          default: undefined
        }
      } : {})
    },
    
    emits: [...events, ...(vModel ? [vModel.event, `update:${vModel.prop}`] : [])],
    
    setup(props, { attrs, slots, emit, expose }) {
      const elementRef: Ref<HTMLElement | null> = { value: null } as any;
      
      expose({
        $el: elementRef
      });
      
      return () => {
        const listeners: Record<string, any> = {};
        
        // Map all events
        events.forEach((eventName) => {
          listeners[eventName] = (e: Event) => {
            emit(eventName, e);
          };
        });
        
        // Handle v-model
        if (vModel) {
          listeners[vModel.event] = (e: Event) => {
            const target = e.target as any;
            const value = target[vModel.prop] ?? target.value ?? (e as any).detail?.value;
            emit(`update:${vModel.prop}`, value);
            emit(vModel.event, e);
          };
        }
        
        const componentProps: Record<string, any> = {
          ref: (el: any) => {
            (elementRef as any).value = el;
          },
          ...attrs
        };
        
        // Set v-model prop
        if (vModel && props[vModel.prop] !== undefined) {
          componentProps[vModel.prop] = props[vModel.prop];
        }
        
        // Merge event listeners
        Object.keys(listeners).forEach((key) => {
          const eventKey = `on${key.charAt(0).toUpperCase()}${key.slice(1)}`;
          componentProps[eventKey] = listeners[key];
        });
        
        return h(tagName, componentProps, slots.default?.());
      };
    }
  });
}

/**
 * Plugin to register all EVA components globally
 */
export function createEVAPlugin(components: Record<string, any>) {
  return {
    install(app: any) {
      // Register Vue components
      Object.entries(components).forEach(([name, component]) => {
        app.component(name, component);
      });
    }
  };
}
