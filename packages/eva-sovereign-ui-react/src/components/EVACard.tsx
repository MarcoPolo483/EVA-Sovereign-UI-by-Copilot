import React, { forwardRef, useEffect, useRef } from 'react';

export interface EVACardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'outlined' | 'elevated';
}

export const EVACard = forwardRef<HTMLElement, EVACardProps>(function EVACard(
  { children, variant = 'default', ...rest },
  ref
) {
  const innerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = innerRef.current as HTMLElement | null;
    if (!el) return;
    el.setAttribute('variant', variant);
  }, [variant]);

  return (
    <eva-card ref={(node: HTMLElement | null) => {
      innerRef.current = node as unknown as HTMLElement;
      if (typeof ref === 'function') ref(node as unknown as HTMLElement);
      else if (ref && typeof ref === 'object') (ref as React.MutableRefObject<HTMLElement | null>).current = node as unknown as HTMLElement;
    }} {...rest}>
      {children}
    </eva-card>
  );
});

export type EVACardRef = HTMLElement;
