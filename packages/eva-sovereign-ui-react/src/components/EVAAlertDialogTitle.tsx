import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogTitleProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogTitle = forwardRef<HTMLElement, EVAAlertDialogTitleProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-title', { ref: ref as any, ...props }, children);
});

EVAAlertDialogTitle.displayName = 'EVAAlertDialogTitle';
