import React, { forwardRef } from 'react';
import '../types';

export interface EVALabelProps extends React.HTMLAttributes<HTMLElement> {}

export const EVALabel = forwardRef<HTMLElement, EVALabelProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-label', { ref: ref as any, ...props }, children);
});

EVALabel.displayName = 'EVALabel';
