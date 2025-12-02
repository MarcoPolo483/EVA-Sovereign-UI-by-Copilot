import React, { forwardRef } from 'react';
import '../types';

export interface EVAPageShellProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAPageShell = forwardRef<HTMLElement, EVAPageShellProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-page-shell', { ref: ref as any, ...props }, children);
});

EVAPageShell.displayName = 'EVAPageShell';
