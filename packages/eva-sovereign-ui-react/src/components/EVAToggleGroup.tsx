import React, { forwardRef } from 'react';
import '../types';

export interface EVAToggleGroupProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAToggleGroup = forwardRef<HTMLElement, EVAToggleGroupProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-toggle-group', { ref: ref as any, ...props }, children);
});

EVAToggleGroup.displayName = 'EVAToggleGroup';
