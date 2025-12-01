import React, { forwardRef } from 'react';
import '../types';
import type { EVAGCButtonElement } from '../types';

export interface EVAGCButtonProps extends Omit<EVAGCButtonElement, 'ref'> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const EVAGCButton = forwardRef<HTMLElement, EVAGCButtonProps>(
  ({ children, onClick, ...props }, ref) => {
    const handleClick = (e: any) => {
      onClick?.(e);
    };
    return React.createElement('eva-gc-button', { ref: ref as any, ...props, onClick: handleClick }, children);
  }
);

EVAGCButton.displayName = 'EVAGCButton';
