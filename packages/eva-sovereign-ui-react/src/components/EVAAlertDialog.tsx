import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialog = forwardRef<HTMLElement, EVAAlertDialogProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog', { ref: ref as any, ...props }, children);
});

EVAAlertDialog.displayName = 'EVAAlertDialog';
