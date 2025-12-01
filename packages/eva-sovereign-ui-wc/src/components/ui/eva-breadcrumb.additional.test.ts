import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './eva-breadcrumb';

describe('eva-breadcrumb (additional coverage)', () => {
  let host: HTMLDivElement;

  beforeEach(() => {
    host = document.createElement('div');
    host.innerHTML = `
      <eva-breadcrumb>
        <eva-breadcrumb-list>
          <eva-breadcrumb-item>
            <eva-breadcrumb-link href="#home">Home</eva-breadcrumb-link>
          </eva-breadcrumb-item>
          <eva-breadcrumb-separator></eva-breadcrumb-separator>
          <eva-breadcrumb-item>
            <eva-breadcrumb-link href="#services">Services</eva-breadcrumb-link>
          </eva-breadcrumb-item>
          <eva-breadcrumb-separator>»</eva-breadcrumb-separator>
          <eva-breadcrumb-page>Apply</eva-breadcrumb-page>
        </eva-breadcrumb-list>
      </eva-breadcrumb>
    `;
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('renders nav landmark and links with provided hrefs', async () => {
    await Promise.resolve();
    const bc = host.querySelector('eva-breadcrumb')!;
    const nav = bc.shadowRoot?.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('breadcrumb');

    const links = Array.from(host.querySelectorAll('eva-breadcrumb-link'));
    expect(links.length).toBe(2);
    const a0 = links[0].shadowRoot?.querySelector('a');
    const a1 = links[1].shadowRoot?.querySelector('a');
    expect(a0?.getAttribute('href')).toBe('#home');
    expect(a1?.getAttribute('href')).toBe('#services');
  });

  it('marks the current page element with aria-current', async () => {
    await Promise.resolve();
    const page = host.querySelector('eva-breadcrumb-page')!;
    const span = page.shadowRoot?.querySelector('span.page');
    expect(span?.getAttribute('aria-current')).toBe('page');
    expect(span?.getAttribute('aria-disabled')).toBe('true');
  });

  it('uses a default separator when none provided', async () => {
    await Promise.resolve();
    const seps = host.querySelectorAll('eva-breadcrumb-separator');
    const sepDefault = seps[0]!;
    const liDefault = sepDefault.shadowRoot?.querySelector('li.separator');
    expect(liDefault?.textContent?.trim()).toBe('›');

    const sepCustom = seps[1]!;
    // Custom content should not be replaced (checked via light DOM text)
    expect(sepCustom.textContent?.trim()).toBe('»');
  });
});
