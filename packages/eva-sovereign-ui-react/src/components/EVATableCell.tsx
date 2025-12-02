import React, { forwardRef } from 'react';
import '../types';

export interface EVATableCellProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATableCell = forwardRef<HTMLElement, EVATableCellProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-table-cell', { ref: ref as any, ...props }, children);
});

EVATableCell.displayName = 'EVATableCell';
