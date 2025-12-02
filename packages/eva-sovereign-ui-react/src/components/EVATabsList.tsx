import React, { forwardRef } from 'react';
import '../types';

export interface EVATabsListProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATabsList = forwardRef<HTMLElement, EVATabsListProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-tabs-list', { ref: ref as any, ...props }, children);
});

EVATabsList.displayName = 'EVATabsList';
