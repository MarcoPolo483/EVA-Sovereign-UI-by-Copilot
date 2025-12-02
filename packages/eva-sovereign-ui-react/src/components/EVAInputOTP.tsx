import React, { forwardRef } from 'react';
import '../types';

export interface EVAInputOTPProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAInputOTP = forwardRef<HTMLElement, EVAInputOTPProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-input-otp', { ref: ref as any, ...props }, children);
});

EVAInputOTP.displayName = 'EVAInputOTP';
