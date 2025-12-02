import React, { forwardRef } from 'react';
import '../types';

export interface EVAAvatarProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAvatar = forwardRef<HTMLElement, EVAAvatarProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-avatar', { ref: ref as any, ...props }, children);
});

EVAAvatar.displayName = 'EVAAvatar';
