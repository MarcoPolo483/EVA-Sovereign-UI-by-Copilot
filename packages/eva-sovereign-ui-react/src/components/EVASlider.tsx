import React, { forwardRef } from 'react';
import '../types';

export interface EVASliderProps extends React.HTMLAttributes<HTMLElement> {}

export const EVASlider = forwardRef<HTMLElement, EVASliderProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-slider', { ref: ref as any, ...props }, children);
});

EVASlider.displayName = 'EVASlider';
