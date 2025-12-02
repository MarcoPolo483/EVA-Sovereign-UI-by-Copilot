import React, { forwardRef } from 'react';
import '../types';

export interface EVASeparatorProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASeparator = forwardRef<HTMLElement, EVASeparatorProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-separator', { ref: ref as any, ...props }, children);
});

EVASeparator.displayName = 'EVASeparator';
