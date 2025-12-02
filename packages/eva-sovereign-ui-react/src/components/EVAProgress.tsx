import React, { forwardRef } from 'react';
import '../types';

export interface EVAProgressProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAProgress = forwardRef<HTMLElement, EVAProgressProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-progress', { ref: ref as any, ...props }, children);
});

EVAProgress.displayName = 'EVAProgress';
