import React, { forwardRef } from 'react';
import '../types';

export interface EVAMenubarProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAMenubar = forwardRef<HTMLElement, EVAMenubarProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-menubar', { ref: ref as any, ...props }, children);
});

EVAMenubar.displayName = 'EVAMenubar';
