import React, { forwardRef } from 'react';
import '../types';

export interface EVATabsTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATabsTrigger = forwardRef<HTMLElement, EVATabsTriggerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-tabs-trigger', { ref: ref as any, ...props }, children);
});

EVATabsTrigger.displayName = 'EVATabsTrigger';
