import React, { forwardRef } from 'react';
import '../types';

export interface EVASliderProps extends React.HTMLAttributes<HTMLElement> {
  value?: number;
  max?: number;
}

export const EVASlider = forwardRef<HTMLElement, EVASliderProps>(({ children, value, max, ...props }, ref) => {
  return React.createElement('eva-slider', { ref: ref as any, value, max, ...props }, children);
});

EVASlider.displayName = 'EVASlider';
