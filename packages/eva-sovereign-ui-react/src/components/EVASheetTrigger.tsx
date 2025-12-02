import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheetTrigger = forwardRef<HTMLElement, EVASheetTriggerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet-trigger', { ref: ref as any, ...props }, children);
});

EVASheetTrigger.displayName = 'EVASheetTrigger';
