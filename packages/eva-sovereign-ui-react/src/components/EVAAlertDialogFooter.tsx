import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogFooterProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogFooter = forwardRef<HTMLElement, EVAAlertDialogFooterProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-footer', { ref: ref as any, ...props }, children);
});

EVAAlertDialogFooter.displayName = 'EVAAlertDialogFooter';
