import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVASelectProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  value?: string;
  placeholder?: string;
  onChange?: (e: Event) => void;
}

export const EVASelect = forwardRef<HTMLElement, EVASelectProps>(
  ({ children, value, placeholder, onChange, ...props }, ref) => {
    const innerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const el = innerRef.current as any;
      if (!el) return;
      const handleChange = (e: Event) => onChange?.(e);
      el.addEventListener('change', handleChange as EventListener);
      return () => el.removeEventListener('change', handleChange as EventListener);
    }, [onChange]);

    useEffect(() => {
      const el = innerRef.current as any;
      if (!el) return;
      if (typeof value !== 'undefined') el.setAttribute('value', String(value));
      if (typeof placeholder !== 'undefined') el.setAttribute('placeholder', placeholder);
    }, [value, placeholder]);

    return (
      <eva-select
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-select>
    );
  }
);

EVASelect.displayName = 'EVASelect';
