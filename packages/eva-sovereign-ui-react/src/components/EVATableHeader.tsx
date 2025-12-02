import React, { forwardRef } from 'react';
import '../types';

export interface EVATableHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATableHeader = forwardRef<HTMLElement, EVATableHeaderProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-table-header', { ref: ref as any, ...props }, children);
});

EVATableHeader.displayName = 'EVATableHeader';
