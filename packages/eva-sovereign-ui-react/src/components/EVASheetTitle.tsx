import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetTitleProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheetTitle = forwardRef<HTMLElement, EVASheetTitleProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet-title', { ref: ref as any, ...props }, children);
});

EVASheetTitle.displayName = 'EVASheetTitle';
