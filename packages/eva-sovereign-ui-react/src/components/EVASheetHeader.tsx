import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheetHeader = forwardRef<HTMLElement, EVASheetHeaderProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet-header', { ref: ref as any, ...props }, children);
});

EVASheetHeader.displayName = 'EVASheetHeader';
