import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheet = forwardRef<HTMLElement, EVASheetProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet', { ref: ref as any, ...props }, children);
});

EVASheet.displayName = 'EVASheet';
