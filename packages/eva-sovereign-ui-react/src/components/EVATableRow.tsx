import React, { forwardRef } from 'react';
import '../types';

export interface EVATableRowProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATableRow = forwardRef<HTMLElement, EVATableRowProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-table-row', { ref: ref as any, ...props }, children);
});

EVATableRow.displayName = 'EVATableRow';
