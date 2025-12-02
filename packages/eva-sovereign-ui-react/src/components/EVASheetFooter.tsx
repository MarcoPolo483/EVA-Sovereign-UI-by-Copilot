import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetFooterProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheetFooter = forwardRef<HTMLElement, EVASheetFooterProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet-footer', { ref: ref as any, ...props }, children);
});

EVASheetFooter.displayName = 'EVASheetFooter';
