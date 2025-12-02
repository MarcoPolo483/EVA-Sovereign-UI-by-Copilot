import React, { forwardRef } from 'react';
import '../types';

export interface EVAButtonProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAButton = forwardRef<HTMLElement, EVAButtonProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-button', { ref: ref as any, ...props }, children);
});

EVAButton.displayName = 'EVAButton';
