import React, { forwardRef } from 'react';
import '../types';

export interface EVAAvatarImageProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAvatarImage = forwardRef<HTMLElement, EVAAvatarImageProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-avatar-image', { ref: ref as any, ...props }, children);
});

EVAAvatarImage.displayName = 'EVAAvatarImage';
