import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVATabsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  value?: string;
  onChange?: (e: Event) => void;
}

export const EVATabs = forwardRef<HTMLElement, EVATabsProps>(
  ({ children, value, onChange, ...props }, ref) => {
    const innerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      const handleChange = (e: Event) => onChange?.(e);
      el.addEventListener('change', handleChange as EventListener);
      return () => el.removeEventListener('change', handleChange as EventListener);
    }, [onChange]);

    useEffect(() => {
      const el = innerRef.current as any;
      if (!el || typeof value === 'undefined') return;
      el.setAttribute('value', value);
    }, [value]);

    return (
      <eva-tabs
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-tabs>
    );
  }
);

EVATabs.displayName = 'EVATabs';
