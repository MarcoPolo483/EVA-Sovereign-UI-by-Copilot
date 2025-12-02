import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVACheckboxProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
  label?: string;
  onChange?: (e: Event) => void;
}

export const EVACheckbox = forwardRef<HTMLElement, EVACheckboxProps>(
  ({ children, checked, disabled, value, name, label, onChange, ...props }, ref) => {
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
      if (!el) return;
      if (typeof checked !== 'undefined') {
        if (checked) el.setAttribute('checked', '');
        else el.removeAttribute('checked');
      }
      if (typeof disabled !== 'undefined') {
        if (disabled) el.setAttribute('disabled', '');
        else el.removeAttribute('disabled');
      }
      if (typeof value !== 'undefined') el.setAttribute('value', String(value));
      if (typeof name !== 'undefined') el.setAttribute('name', String(name));
      if (typeof label !== 'undefined') el.setAttribute('label', String(label));
    }, [checked, disabled, value, name, label]);

    return (
      <eva-checkbox
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-checkbox>
    );
  }
);

EVACheckbox.displayName = 'EVACheckbox';

export type { EVACheckboxProps as EVACheckboxPropsType };
