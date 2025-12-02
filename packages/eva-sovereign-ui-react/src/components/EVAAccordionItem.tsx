import React, { forwardRef } from 'react';
import '../types';

export interface EVAAccordionItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAAccordionItem = forwardRef<HTMLElement, EVAAccordionItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-accordion-item', { ref: ref as any, ...props }, children);
});

EVAAccordionItem.displayName = 'EVAAccordionItem';
