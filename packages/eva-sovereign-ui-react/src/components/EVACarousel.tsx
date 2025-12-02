import React, { forwardRef } from 'react';
import '../types';

export interface EVACarouselProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACarousel = forwardRef<HTMLElement, EVACarouselProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-carousel', { ref: ref as any, ...props }, children);
});

EVACarousel.displayName = 'EVACarousel';
