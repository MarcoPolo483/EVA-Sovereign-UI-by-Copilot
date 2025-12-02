import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogContentProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogContent = forwardRef<HTMLElement, EVAAlertDialogContentProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-content', { ref: ref as any, ...props }, children);
});

EVAAlertDialogContent.displayName = 'EVAAlertDialogContent';
