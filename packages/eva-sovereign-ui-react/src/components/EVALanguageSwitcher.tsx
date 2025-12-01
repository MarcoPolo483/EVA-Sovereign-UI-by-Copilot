import React, { useEffect, useRef, forwardRef } from 'react';
import '../types';
import type { EVALanguageSwitcherElement, EVACustomEvent } from '../types';

export interface EVALanguageSwitcherProps extends Omit<EVALanguageSwitcherElement, 'ref'> {
  onLanguageChange?: (locale: string) => void;
}

export const EVALanguageSwitcher = forwardRef<HTMLElement, EVALanguageSwitcherProps>(
  ({ children, onLanguageChange, ...props }, ref) => {
    const internalRef = useRef<any>(null);

    useEffect(() => {
      const element = internalRef.current;
      if (!element) return;

      const handleChange = (e: EVACustomEvent<{ locale: string }>) => {
        onLanguageChange?.(e.detail.locale);
      };

      element.addEventListener('language-change', handleChange);
      return () => element.removeEventListener('language-change', handleChange);
    }, [onLanguageChange]);

    return React.createElement('eva-language-switcher', { ref: (ref as any) || internalRef, ...props }, children);
  }
);

EVALanguageSwitcher.displayName = 'EVALanguageSwitcher';
