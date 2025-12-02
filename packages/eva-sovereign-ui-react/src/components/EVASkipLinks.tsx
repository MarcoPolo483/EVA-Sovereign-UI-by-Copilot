import React, { forwardRef } from 'react';
import '../types';

export interface EVASkipLinksProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASkipLinks = forwardRef<HTMLElement, EVASkipLinksProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-skip-links', { ref: ref as any, ...props }, children);
});

EVASkipLinks.displayName = 'EVASkipLinks';
