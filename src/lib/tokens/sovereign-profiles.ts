import { gcColors } from './colors';

export interface SovereignProfile {
  id: string;
  name: string;
  nameShort: string;
  flag: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  legalText: string;
  links: {
    label: string;
    url: string;
  }[];
  defaultLocale: string;
  availableLocales: string[];
}

// Canada-First: Single sovereign profile for Canadian federal government
export const sovereignProfiles: Record<string, SovereignProfile> = {
  canada_gc: {
    id: 'canada_gc',
    name: 'Government of Canada',
    nameShort: 'Canada',
    flag: '🇨🇦',
    colors: {
      primary: gcColors.accent,
      secondary: gcColors.linkBlue,
      accent: gcColors.h1Bar,
      background: gcColors.background,
      text: gcColors.text,
    },
    legalText: '© His Majesty the King in Right of Canada',
    links: [
      { label: 'Privacy', url: 'https://www.canada.ca/en/transparency/privacy.html' },
      { label: 'Terms and conditions', url: 'https://www.canada.ca/en/transparency/terms.html' },
      { label: 'Accessibility', url: 'https://www.canada.ca/en/accessibility.html' },
      { label: 'Canada.ca', url: 'https://www.canada.ca' },
    ],
    defaultLocale: 'en-CA',
    availableLocales: ['en-CA', 'fr-CA'],
  },
};
