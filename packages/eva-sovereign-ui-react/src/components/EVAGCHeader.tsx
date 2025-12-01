import React, { forwardRef } from 'react';
import '../types';
import type { EVAGCHeaderElement } from '../types';

export interface EVAGCHeaderProps extends Omit<EVAGCHeaderElement, 'ref'> {}

export const EVAGCHeader = forwardRef<HTMLElement, EVAGCHeaderProps>(
  ({ children, ...props }, ref) => {
    return React.createElement('eva-gc-header', { ref: ref as any, ...props }, children);
  }
);

EVAGCHeader.displayName = 'EVAGCHeader';
