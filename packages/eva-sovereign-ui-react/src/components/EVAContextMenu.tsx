import React, { forwardRef } from 'react';
import '../types';

export interface EVAContextMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAContextMenu = forwardRef<HTMLElement, EVAContextMenuProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-context-menu', { ref: ref as any, ...props }, children);
});

EVAContextMenu.displayName = 'EVAContextMenu';
