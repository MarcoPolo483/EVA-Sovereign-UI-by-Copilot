import React, { forwardRef } from 'react';
import '../types';

export interface EVAToggleGroupItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAToggleGroupItem = forwardRef<HTMLElement, EVAToggleGroupItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-toggle-group-item', { ref: ref as any, ...props }, children);
});

EVAToggleGroupItem.displayName = 'EVAToggleGroupItem';
