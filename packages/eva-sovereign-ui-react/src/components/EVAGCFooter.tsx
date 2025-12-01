import React, { forwardRef } from 'react';
import '../types';
import type { EVAGCFooterElement } from '../types';

export interface EVAGCFooterProps extends Omit<EVAGCFooterElement, 'ref'> {}

export const EVAGCFooter = forwardRef<HTMLElement, EVAGCFooterProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('eva-gc-footer', { ref: ref as any, ...props }, children);
  }
);

EVAGCFooter.displayName = 'EVAGCFooter';
