import React, { forwardRef } from 'react';
import '../types';

export interface EVATableProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATable = forwardRef<HTMLElement, EVATableProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-table', { ref: ref as any, ...props }, children);
});

EVATable.displayName = 'EVATable';
