// Generate Custom Elements Manifest using @custom-elements-manifest/analyzer
// Requires devDependency: @custom-elements-manifest/analyzer
import { analyze } from '@custom-elements-manifest/analyzer';
import { writeFileSync } from 'node:fs';
import { globby } from 'globby';

const sources = await globby(['packages/eva-sovereign-ui-wc/src/**/*.ts', '!**/*.test.ts']);
const manifest = await analyze({
  globs: sources,
  lite: true,
});

writeFileSync('custom-elements.json', JSON.stringify(manifest, null, 2));
console.log('custom-elements.json generated');
