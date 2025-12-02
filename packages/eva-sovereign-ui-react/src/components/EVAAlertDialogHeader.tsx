import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogHeader = forwardRef<HTMLElement, EVAAlertDialogHeaderProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-header', { ref: ref as any, ...props }, children);
});

EVAAlertDialogHeader.displayName = 'EVAAlertDialogHeader';
