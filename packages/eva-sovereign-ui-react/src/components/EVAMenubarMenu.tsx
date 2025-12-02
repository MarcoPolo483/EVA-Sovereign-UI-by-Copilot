import React, { forwardRef } from 'react';
import '../types';

export interface EVAMenubarMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAMenubarMenu = forwardRef<HTMLElement, EVAMenubarMenuProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-menubar-menu', { ref: ref as any, ...props }, children);
});

EVAMenubarMenu.displayName = 'EVAMenubarMenu';
