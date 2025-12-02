import React, { forwardRef } from 'react';
import '../types';

export interface EVATabsContentProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATabsContent = forwardRef<HTMLElement, EVATabsContentProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-tabs-content', { ref: ref as any, ...props }, children);
});

EVATabsContent.displayName = 'EVATabsContent';
