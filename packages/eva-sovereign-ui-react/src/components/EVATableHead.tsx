import React, { forwardRef } from 'react';
import '../types';

export interface EVATableHeadProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATableHead = forwardRef<HTMLElement, EVATableHeadProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-table-head', { ref: ref as any, ...props }, children);
});

EVATableHead.displayName = 'EVATableHead';
