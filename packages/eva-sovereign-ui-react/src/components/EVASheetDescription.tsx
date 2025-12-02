import React, { forwardRef } from 'react';
import '../types';

export interface EVASheetDescriptionProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASheetDescription = forwardRef<HTMLElement, EVASheetDescriptionProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-sheet-description', { ref: ref as any, ...props }, children);
});

EVASheetDescription.displayName = 'EVASheetDescription';
