import React, { forwardRef } from 'react';
import '../types';

export interface EVAAspectRatioProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAspectRatio = forwardRef<HTMLElement, EVAAspectRatioProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-aspect-ratio', { ref: ref as any, ...props }, children);
});

EVAAspectRatio.displayName = 'EVAAspectRatio';
