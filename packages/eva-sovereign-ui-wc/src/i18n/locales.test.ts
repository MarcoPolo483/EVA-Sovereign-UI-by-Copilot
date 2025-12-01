/**
 * Locale File Validation Tests
 * Ensures all Five Eyes locale files are valid and complete
 */

import { describe, it, expect } from 'vitest';
import enCA from './locales/en-CA.json';
import frCA from './locales/fr-CA.json';
import enUS from './locales/en-US.json';
import esUS from './locales/es-US.json';
import enGB from './locales/en-GB.json';
import cyGB from './locales/cy-GB.json';
import enAU from './locales/en-AU.json';
import enNZ from './locales/en-NZ.json';
import miNZ from './locales/mi-NZ.json';

// Define the structure that all locale files should have
const requiredKeys = [
  'esdc',
  'esdc.title',
  'esdc.shortTitle',
  'esdc.hero',
  'esdc.hero.title',
  'esdc.hero.description',
  'esdc.programs',
  'esdc.programs.title',
  'esdc.programs.ei',
  'esdc.programs.ei.title',
  'esdc.programs.ei.description',
  'esdc.programs.oas',
  'esdc.programs.oas.title',
  'esdc.programs.oas.description',
  'esdc.programs.cpp',
  'esdc.programs.cpp.title',
  'esdc.programs.cpp.description',
  'chat',
  'chat.title',
  'chat.placeholder',
  'chat.send',
  'chat.thinking',
  'chat.welcome',
  'nav',
  'nav.skipToContent',
  'nav.home',
  'footer',
  'footer.copyright',
  'footer.privacy',
  'footer.terms',
  'footer.accessibility',
  'accessibility',
  'accessibility.loading',
  'accessibility.close',
  'accessibility.open',
  'accessibility.menu',
  'accessibility.search',
  'accessibility.language',
  'language',
  'language.switchTo',
  'language.current',
  'devkit',
  'devkit.title',
  'devkit.subtitle',
  'common'
];

// Helper function to check if a nested key exists
function hasNestedKey(obj: any, path: string): boolean {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (!current || typeof current !== 'object' || !(key in current)) {
      return false;
    }
    current = current[key];
  }
  
  return true;
}

// Helper function to get nested value
function getNestedValue(obj: any, path: string): any {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    current = current[key];
  }
  
  return current;
}

describe('Locale File Structure Validation', () => {
  const locales = {
    'en-CA': enCA,
    'fr-CA': frCA,
    'en-US': enUS,
    'es-US': esUS,
    'en-GB': enGB,
    'cy-GB': cyGB,
    'en-AU': enAU,
    'en-NZ': enNZ,
    'mi-NZ': miNZ
  };

  Object.entries(locales).forEach(([localeName, localeData]) => {
    describe(`${localeName} locale`, () => {
      it('should be valid JSON', () => {
        expect(localeData).toBeDefined();
        expect(typeof localeData).toBe('object');
      });

      it('should have all required top-level keys', () => {
        expect(localeData).toHaveProperty('esdc');
        expect(localeData).toHaveProperty('chat');
        expect(localeData).toHaveProperty('nav');
        expect(localeData).toHaveProperty('footer');
        expect(localeData).toHaveProperty('accessibility');
        expect(localeData).toHaveProperty('language');
        expect(localeData).toHaveProperty('devkit');
      });

      requiredKeys.forEach(key => {
        it(`should have required key: ${key}`, () => {
          expect(hasNestedKey(localeData, key)).toBe(true);
        });
      });

      it('should have string values for leaf nodes', () => {
        const checkStringValues = (obj: any, path: string = ''): string[] => {
          const errors: string[] = [];
          
          for (const [key, value] of Object.entries(obj)) {
            const currentPath = path ? `${path}.${key}` : key;
            
            if (typeof value === 'object' && value !== null) {
              errors.push(...checkStringValues(value, currentPath));
            } else if (typeof value !== 'string') {
              errors.push(`${currentPath}: expected string, got ${typeof value}`);
            }
          }
          
          return errors;
        };

        const errors = checkStringValues(localeData);
        expect(errors).toEqual([]);
      });

      it('should not have empty string values', () => {
        const checkEmptyStrings = (obj: any, path: string = ''): string[] => {
          const errors: string[] = [];
          
          for (const [key, value] of Object.entries(obj)) {
            const currentPath = path ? `${path}.${key}` : key;
            
            if (typeof value === 'object' && value !== null) {
              errors.push(...checkEmptyStrings(value, currentPath));
            } else if (typeof value === 'string' && value.trim() === '') {
              errors.push(currentPath);
            }
          }
          
          return errors;
        };

        const errors = checkEmptyStrings(localeData);
        expect(errors).toEqual([]);
      });
    });
  });
});

describe('Canada Locale Tests', () => {
  describe('en-CA (English Canadian)', () => {
    it('should have Canadian English content', () => {
      expect(enCA.footer.copyright).toContain('His Majesty the King in Right of Canada');
      expect(enCA.footer.canadaCa).toBe('Canada.ca');
    });

    it('should have proper language labels', () => {
      expect(enCA.language.en).toBe('English');
      expect(enCA.language.fr).toBe('Français');
    });
  });

  describe('fr-CA (French Canadian)', () => {
    it('should have Canadian French content', () => {
      expect(frCA.footer.copyright).toContain('Sa Majesté le Roi du chef du Canada');
      expect(frCA.esdc.title).toBe('Emploi et Développement social Canada');
    });

    it('should have proper French greetings', () => {
      expect(frCA.chat.welcome).toContain('Bonjour');
    });
  });
});

describe('USA Locale Tests', () => {
  describe('en-US (English American)', () => {
    it('should have US government terminology', () => {
      expect(enUS.footer.copyright).toContain('United States government');
      expect(enUS.footer.usaGov).toBe('USA.gov');
    });
  });

  describe('es-US (Spanish American)', () => {
    it('should have Spanish translations', () => {
      expect(esUS.esdc.title).toContain('Empleo');
      expect(esUS.chat.send).toBe('Enviar');
    });

    it('should have US Spanish greeting', () => {
      expect(esUS.chat.welcome).toContain('Hola');
    });

    it('should have Spanish language labels', () => {
      expect(esUS.language.en).toBe('English');
      expect(esUS.language.es).toBe('Español');
    });
  });
});

describe('UK Locale Tests', () => {
  describe('en-GB (English British)', () => {
    it('should use British spelling', () => {
      expect(enGB.esdc.programs.title).toBe('Programmes and Services');
      expect(enGB.esdc.hero.description).toContain('programmes');
    });

    it('should have Crown copyright', () => {
      expect(enGB.footer.copyright).toBe('© Crown copyright');
      expect(enGB.footer.govUk).toBe('GOV.UK');
    });
  });

  describe('cy-GB (Welsh)', () => {
    it('should have Welsh translations', () => {
      expect(cyGB.esdc.title).toContain('Cyflogaeth');
      expect(cyGB.chat.send).toBe('Anfon');
    });

    it('should have Welsh greeting', () => {
      expect(cyGB.chat.welcome).toContain('Helo');
    });

    it('should have Crown copyright in Welsh', () => {
      expect(cyGB.footer.copyright).toBe('© Hawlfraint y Goron');
    });

    it('should have Welsh language labels', () => {
      expect(cyGB.language.en).toBe('English');
      expect(cyGB.language.cy).toBe('Cymraeg');
    });
  });
});

describe('Australia Locale Tests', () => {
  describe('en-AU (English Australian)', () => {
    it('should have Australian content', () => {
      expect(enAU.footer.copyright).toContain('Commonwealth of Australia');
    });

    it('should have Australian greeting', () => {
      expect(enAU.chat.welcome).toContain("G'day");
    });

    it('should reference Australian geography', () => {
      expect(enAU.esdc.services.jobSearch.description).toContain('Australia');
    });
  });
});

describe('New Zealand Locale Tests', () => {
  describe('en-NZ (English New Zealand)', () => {
    it('should use British spelling variants', () => {
      expect(enNZ.esdc.programs.title).toBe('Programmes and Services');
      expect(enNZ.esdc.hero.description).toContain('programmes');
    });

    it('should have Crown copyright', () => {
      expect(enNZ.footer.copyright).toBe('© Crown copyright');
      expect(enNZ.footer.govNz).toBe('govt.nz');
    });

    it('should have Māori greeting in English', () => {
      expect(enNZ.chat.welcome).toContain('Kia ora');
    });
  });

  describe('mi-NZ (Te Reo Māori)', () => {
    it('should have Māori translations', () => {
      expect(miNZ.esdc.title).toContain('Kānata');
      expect(miNZ.chat.send).toBe('Tuku');
    });

    it('should have Māori greeting', () => {
      expect(miNZ.chat.welcome).toContain('Kia ora');
    });

    it('should use proper macrons', () => {
      // Check for macrons in Māori text
      const hasProperMacrons = /[āēīōū]/.test(JSON.stringify(miNZ));
      expect(hasProperMacrons).toBe(true);
    });

    it('should have Crown terminology in Māori', () => {
      expect(miNZ.footer.copyright).toContain('Karauna');
    });

    it('should have Māori language labels', () => {
      expect(miNZ.language.en).toBe('English');
      expect(miNZ.language.mi).toBe('Te Reo Māori');
    });
  });
});

describe('Translation Completeness', () => {
  it('should have all locales with same structure depth', () => {
    const locales = [enCA, frCA, enUS, esUS, enGB, cyGB, enAU, enNZ, miNZ];
    
    const getDepth = (obj: any, depth = 0): number => {
      if (typeof obj !== 'object' || obj === null) return depth;
      
      const depths = Object.values(obj).map(val => getDepth(val, depth + 1));
      return Math.max(...depths);
    };

    const depths = locales.map(locale => getDepth(locale));
    const uniqueDepths = [...new Set(depths)];
    
    // All locales should have similar depth (allowing for minor variations)
    expect(uniqueDepths.length).toBeLessThanOrEqual(2);
  });

  it('should have common.learnMore in locales that need it', () => {
    // Some locales use this key
    expect(esUS.common?.learnMore).toBeDefined();
    expect(cyGB.common?.learnMore).toBeDefined();
    expect(miNZ.common?.learnMore).toBeDefined();
  });
});

describe('Regional Variations', () => {
  it('should have different copyright notices per country', () => {
    const copyrights = [
      enCA.footer.copyright,
      enUS.footer.copyright,
      enGB.footer.copyright,
      enAU.footer.copyright,
      enNZ.footer.copyright
    ];

    // Most should be different (UK and NZ both use Crown copyright)
    const uniqueCopyrights = new Set(copyrights);
    expect(uniqueCopyrights.size).toBeGreaterThanOrEqual(4);
  });

  it('should have different government websites per country', () => {
    expect(enCA.footer).toHaveProperty('canadaCa');
    expect(enUS.footer).toHaveProperty('usaGov');
    expect(enGB.footer).toHaveProperty('govUk');
    expect(enAU.footer).toHaveProperty('govAu');
    expect(enNZ.footer).toHaveProperty('govNz');
  });

  it('should have culturally appropriate greetings', () => {
    expect(enCA.chat.welcome).toContain('Hello');
    expect(frCA.chat.welcome).toContain('Bonjour');
    expect(esUS.chat.welcome).toContain('Hola');
    expect(enAU.chat.welcome).toContain("G'day");
    expect(enNZ.chat.welcome).toContain('Kia ora');
    expect(miNZ.chat.welcome).toContain('Kia ora');
  });
});
