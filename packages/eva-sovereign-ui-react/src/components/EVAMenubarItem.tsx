import React, { forwardRef } from 'react';
import '../types';

export interface EVAMenubarItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAMenubarItem = forwardRef<HTMLElement, EVAMenubarItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-menubar-item', { ref: ref as any, ...props }, children);
});

EVAMenubarItem.displayName = 'EVAMenubarItem';
