import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetContentProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheetContent = forwardRef<HTMLElement, EVASheetContentProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet-content', { ref: ref as any, ...props }, children);
});

EVASheetContent.displayName = 'EVASheetContent';
