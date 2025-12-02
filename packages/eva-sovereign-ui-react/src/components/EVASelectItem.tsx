import React, { forwardRef } from 'react';
import '../types';

export interface EVASelectItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASelectItem = forwardRef<HTMLElement, EVASelectItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-select-item', { ref: ref as any, ...props }, children);
});

EVASelectItem.displayName = 'EVASelectItem';
