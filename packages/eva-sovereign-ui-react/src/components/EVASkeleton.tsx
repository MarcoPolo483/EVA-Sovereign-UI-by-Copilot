import React, { forwardRef } from 'react';
import '../types';

export interface EVASkeletonProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASkeleton = forwardRef<HTMLElement, EVASkeletonProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-skeleton', { ref: ref as any, ...props }, children);
});

EVASkeleton.displayName = 'EVASkeleton';
