import React, { forwardRef } from 'react';
import '../types';

export interface EVAProgressProps extends React.HTMLAttributes<HTMLElement> {
  value?: number;
  max?: number;
}

export const EVAProgress = forwardRef<HTMLElement, EVAProgressProps>(({ children, value, max, ...props }, ref) => {
  return React.createElement('eva-progress', { ref: ref as any, value, max, ...props }, children);
});

EVAProgress.displayName = 'EVAProgress';
