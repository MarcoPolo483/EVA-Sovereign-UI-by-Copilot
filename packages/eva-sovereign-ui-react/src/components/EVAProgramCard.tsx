import React, { forwardRef } from 'react';
import '../types';

export interface EVAProgramCardProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAProgramCard = forwardRef<HTMLElement, EVAProgramCardProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-program-card', { ref: ref as any, ...props }, children);
});

EVAProgramCard.displayName = 'EVAProgramCard';
