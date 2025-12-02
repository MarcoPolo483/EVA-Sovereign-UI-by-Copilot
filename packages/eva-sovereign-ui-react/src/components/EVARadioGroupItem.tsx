import React, { forwardRef } from 'react';
import '../types';

export interface EVARadioGroupItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVARadioGroupItem = forwardRef<HTMLElement, EVARadioGroupItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-radio-group-item', { ref: ref as any, ...props }, children);
});

EVARadioGroupItem.displayName = 'EVARadioGroupItem';
