import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogTrigger = forwardRef<HTMLElement, EVAAlertDialogTriggerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-trigger', { ref: ref as any, ...props }, children);
});

EVAAlertDialogTrigger.displayName = 'EVAAlertDialogTrigger';
