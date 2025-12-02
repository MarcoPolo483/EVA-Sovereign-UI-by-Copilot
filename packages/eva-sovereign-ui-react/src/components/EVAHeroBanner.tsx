import React, { forwardRef } from 'react';
import '../types';

export interface EVAHeroBannerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAHeroBanner = forwardRef<HTMLElement, EVAHeroBannerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-hero-banner', { ref: ref as any, ...props }, children);
});

EVAHeroBanner.displayName = 'EVAHeroBanner';
