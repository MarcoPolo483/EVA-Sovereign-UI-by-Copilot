import React, { forwardRef } from 'react';
import '../types';

export interface EVAAvatarFallbackProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAvatarFallback = forwardRef<HTMLElement, EVAAvatarFallbackProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-avatar-fallback', { ref: ref as any, ...props }, children);
});

EVAAvatarFallback.displayName = 'EVAAvatarFallback';
