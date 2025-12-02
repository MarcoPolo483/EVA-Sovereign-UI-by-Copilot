import React, { forwardRef } from 'react';
import '../types';

export interface EVAAccordionProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAccordion = forwardRef<HTMLElement, EVAAccordionProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-accordion', { ref: ref as any, ...props }, children);
});

EVAAccordion.displayName = 'EVAAccordion';
