import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogCancelProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogCancel = forwardRef<HTMLElement, EVAAlertDialogCancelProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-cancel', { ref: ref as any, ...props }, children);
});

EVAAlertDialogCancel.displayName = 'EVAAlertDialogCancel';
