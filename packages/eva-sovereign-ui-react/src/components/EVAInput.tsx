import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVAInputProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onInput' | 'onChange'> {
  value?: string;
  placeholder?: string;
  type?: string;
  onInput?: (e: Event) => void;
  onChange?: (e: Event) => void;
}

export const EVAInput = forwardRef<HTMLElement, EVAInputProps>(
  ({ children, value, placeholder, type, onInput, onChange, ...props }, ref) => {
    const innerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      const handleInput = (e: Event) => onInput?.(e);
      const handleChange = (e: Event) => onChange?.(e);
      el.addEventListener('input', handleInput as EventListener);
      el.addEventListener('change', handleChange as EventListener);
      return () => {
        el.removeEventListener('input', handleInput as EventListener);
        el.removeEventListener('change', handleChange as EventListener);
      };
    }, [onInput, onChange]);

    useEffect(() => {
      const el = innerRef.current as any;
      if (!el) return;
      if (typeof value !== 'undefined') el.setAttribute('value', String(value));
      if (typeof placeholder !== 'undefined') el.setAttribute('placeholder', String(placeholder));
      if (typeof type !== 'undefined') el.setAttribute('type', String(type));
    }, [value, placeholder, type]);

    return (
      <eva-input
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-input>
    );
  }
);

EVAInput.displayName = 'EVAInput';
