import React, { forwardRef } from 'react';
import '../types';

export interface EVARadioGroupProps extends React.HTMLAttributes<HTMLElement> {}

export const EVARadioGroup = forwardRef<HTMLElement, EVARadioGroupProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-radio-group', { ref: ref as any, ...props }, children);
});

EVARadioGroup.displayName = 'EVARadioGroup';
