import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVASwitchProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: Event) => void;
}

export const EVASwitch = forwardRef<HTMLElement, EVASwitchProps>(
  ({ children, checked, disabled, onChange, ...props }, ref) => {
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
    }, [checked, disabled]);

    return (
      <eva-switch
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-switch>
    );
  }
);

EVASwitch.displayName = 'EVASwitch';
