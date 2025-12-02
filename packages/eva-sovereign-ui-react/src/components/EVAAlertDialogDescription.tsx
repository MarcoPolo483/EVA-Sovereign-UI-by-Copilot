import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertDialogDescriptionProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlertDialogDescription = forwardRef<HTMLElement, EVAAlertDialogDescriptionProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert-dialog-description', { ref: ref as any, ...props }, children);
});

EVAAlertDialogDescription.displayName = 'EVAAlertDialogDescription';
