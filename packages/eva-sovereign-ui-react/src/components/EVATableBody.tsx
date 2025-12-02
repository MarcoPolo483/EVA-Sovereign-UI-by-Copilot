import React, { forwardRef } from 'react';
import '../types';

export interface EVATableBodyProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATableBody = forwardRef<HTMLElement, EVATableBodyProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-table-body', { ref: ref as any, ...props }, children);
});

EVATableBody.displayName = 'EVATableBody';
