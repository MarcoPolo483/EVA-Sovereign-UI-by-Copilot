import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogActionProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogAction = forwardRef<HTMLElement, EVAAlertDialogActionProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-action', { ref: ref as any, ...props }, children);
});

EVAAlertDialogAction.displayName = 'EVAAlertDialogAction';
