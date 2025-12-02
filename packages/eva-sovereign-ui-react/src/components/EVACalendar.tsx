import React, { forwardRef } from 'react';
import '../types';

export interface EVACalendarProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACalendar = forwardRef<HTMLElement, EVACalendarProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-calendar', { ref: ref as any, ...props }, children);
});

EVACalendar.displayName = 'EVACalendar';
