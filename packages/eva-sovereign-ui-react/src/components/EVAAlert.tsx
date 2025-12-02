import React, { forwardRef } from 'react';
import '../types';

export interface EVAAlertProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAlert = forwardRef<HTMLElement, EVAAlertProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-alert', { ref: ref as any, ...props }, children);
});

EVAAlert.displayName = 'EVAAlert';
