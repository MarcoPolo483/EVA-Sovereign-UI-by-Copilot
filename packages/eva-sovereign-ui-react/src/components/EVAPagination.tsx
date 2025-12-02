import React, { forwardRef } from 'react';
import '../types';

export interface EVAPaginationProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAPagination = forwardRef<HTMLElement, EVAPaginationProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-pagination', { ref: ref as any, ...props }, children);
});

EVAPagination.displayName = 'EVAPagination';
