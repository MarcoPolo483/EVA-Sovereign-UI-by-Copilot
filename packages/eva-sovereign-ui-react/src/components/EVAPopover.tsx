import React, { forwardRef, useEffect, useRef } from 'react';
import '../types';

export interface EVAPopoverProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  onOpen?: (e: Event) => void;
  onClose?: (e: Event) => void;
}

export const EVAPopover = forwardRef<HTMLElement, EVAPopoverProps>(
  ({ children, open, onOpen, onClose, ...props }, ref) => {
    const innerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      const handleOpen = (e: Event) => onOpen?.(e);
      const handleClose = (e: Event) => onClose?.(e);
      el.addEventListener('open', handleOpen as EventListener);
      el.addEventListener('close', handleClose as EventListener);
      return () => {
        el.removeEventListener('open', handleOpen as EventListener);
        el.removeEventListener('close', handleClose as EventListener);
      };
    }, [onOpen, onClose]);

    useEffect(() => {
      const el = innerRef.current as any;
      if (!el || typeof open === 'undefined') return;
      if (open) el.setAttribute('open', '');
      else el.removeAttribute('open');
    }, [open]);

    return (
      <eva-popover
        ref={(node: HTMLElement | null) => {
          innerRef.current = (node as unknown as HTMLElement) || null;
          if (typeof ref === 'function') ref(node as any);
          else if (ref && typeof ref === 'object') (ref as any).current = node as any;
        }}
        {...props}
      >
        {children}
      </eva-popover>
    );
  }
);

EVAPopover.displayName = 'EVAPopover';
