import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVADrawerProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  side?: 'left' | 'right' | 'top' | 'bottom';
  onClose?: (e: Event) => void;
}

export const EVADrawer = forwardRef<HTMLElement, EVADrawerProps>(
  ({ children, open, side, onClose, ...props }, ref) => {
    const innerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      const handleClose = (e: Event) => onClose?.(e);
      el.addEventListener('close', handleClose as EventListener);
      return () => el.removeEventListener('close', handleClose as EventListener);
    }, [onClose]);

    useEffect(() => {
      const el = innerRef.current as any;
      if (!el) return;
      if (typeof open !== 'undefined') {
        if (open) el.setAttribute('open', '');
        else el.removeAttribute('open');
      }
      if (typeof side !== 'undefined') {
        el.setAttribute('side', side);
      }
    }, [open, side]);

    return (
      <eva-drawer
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-drawer>
    );
  }
);

EVADrawer.displayName = 'EVADrawer';
