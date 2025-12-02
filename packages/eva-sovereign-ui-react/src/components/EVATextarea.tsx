import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVATextareaProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onInput' | 'onChange'> {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  label?: string;
  'aria-label'?: string;
  onInput?: (e: Event) => void;
  onChange?: (e: Event) => void;
}

export const EVATextarea = forwardRef<HTMLElement, EVATextareaProps>(
  ({ children, value, placeholder, disabled, readOnly, rows, label, 'aria-label': ariaLabel, onInput, onChange, ...props }, ref) => {
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
      if (typeof disabled !== 'undefined') {
        if (disabled) el.setAttribute('disabled', ''); else el.removeAttribute('disabled');
      }
      if (typeof readOnly !== 'undefined') {
        if (readOnly) el.setAttribute('readonly', ''); else el.removeAttribute('readonly');
      }
      if (typeof rows !== 'undefined') el.setAttribute('rows', String(rows));
      if (typeof label !== 'undefined') el.setAttribute('label', String(label));
      if (typeof ariaLabel !== 'undefined') el.setAttribute('aria-label', String(ariaLabel));
    }, [value, placeholder, disabled, readOnly, rows, label, ariaLabel]);

    return (
      <eva-textarea
        ref={(node: HTMLElement | null) => {
          innerRef.current = node as any;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-textarea>
    );
  }
);

EVATextarea.displayName = 'EVATextarea';
