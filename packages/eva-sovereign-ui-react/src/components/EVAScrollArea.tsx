import React, { forwardRef } from 'react';
import '../types';

export interface EVAScrollAreaProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAScrollArea = forwardRef<HTMLElement, EVAScrollAreaProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-scroll-area', { ref: ref as any, ...props }, children);
});

EVAScrollArea.displayName = 'EVAScrollArea';
