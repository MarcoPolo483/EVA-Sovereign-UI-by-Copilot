import React, { forwardRef } from 'react';
import '../types';

export interface EVATooltipProps extends React.HTMLAttributes<HTMLElement> {}

export const EVATooltip = forwardRef<HTMLElement, EVATooltipProps>(
  ({ children, ...props }, ref) => {
    return (
      <eva-tooltip
        ref={ref as any}
        {...props}
      >
        {children}
      </eva-tooltip>
    );
  }
);

EVATooltip.displayName = 'EVATooltip';
