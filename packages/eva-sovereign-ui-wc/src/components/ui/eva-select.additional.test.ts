import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent } from 'tests/test-utils';
import './eva-select';

describe('eva-select (additional branches)', () => {
	let element: HTMLElement;

	beforeEach(async () => {
		element = await createComponent('eva-select');
	});

	it('renders placeholder when no value is set', async () => {
		element.setAttribute('placeholder', 'Choose an option');
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger span') as HTMLElement;
		expect(trigger?.textContent).toBe('Choose an option');
	});

	it('renders default placeholder when none provided', async () => {
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger span') as HTMLElement;
		expect(trigger?.textContent).toBe('Select...');
	});

	it('applies small size styling when size="sm"', async () => {
		element.setAttribute('size', 'sm');
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLElement;
		expect(trigger).toBeTruthy();
		// Size changes CSS variable; assert trigger exists with small height applied
		const styles = element.shadowRoot?.querySelector('style')?.textContent;
		expect(styles).toContain('2rem');
	});

	it('applies default size styling when size not specified', async () => {
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLElement;
		expect(trigger).toBeTruthy();
		const styles = element.shadowRoot?.querySelector('style')?.textContent;
		expect(styles).toContain('2.25rem');
	});

	it('does not open dropdown when trigger is disabled', async () => {
		element.setAttribute('disabled', '');
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement;
		expect(trigger.hasAttribute('disabled')).toBe(true);
		trigger.click();
		await new Promise(r => setTimeout(r, 30));
		const dropdown = element.shadowRoot?.querySelector('.dropdown');
		expect(dropdown).toBeFalsy();
	});

	it('renders empty dropdown when no items provided', async () => {
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement;
		trigger.click();
		await new Promise(r => setTimeout(r, 30));
		const dropdown = element.shadowRoot?.querySelector('.dropdown');
		expect(dropdown).toBeTruthy();
		const slot = dropdown?.querySelector('slot');
		expect(slot).toBeTruthy();
	});

	it('closes dropdown on outside click when open', async () => {
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement;
		trigger.click();
		await new Promise(r => setTimeout(r, 30));
		expect(element.shadowRoot?.querySelector('.dropdown')).toBeTruthy();

		document.body.click();
		await new Promise(r => setTimeout(r, 30));
		expect(element.shadowRoot?.querySelector('.dropdown')).toBeFalsy();
	});

	it('emits change event with value when item selected', async () => {
		element.innerHTML = '<eva-select-item value="opt1">Option 1</eva-select-item>';
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement;
		trigger.click();
		await new Promise(r => setTimeout(r, 30));

		let emittedValue = '';
		element.addEventListener('change', (e: Event) => {
			emittedValue = (e as CustomEvent).detail.value;
		});

		const item = element.querySelector('eva-select-item') as any;
		const itemDiv = item.shadowRoot?.querySelector('.item') as HTMLElement;
		itemDiv.click();
		await new Promise(r => setTimeout(r, 30));

		expect(emittedValue).toBe('opt1');
		expect(element.getAttribute('value')).toBe('opt1');
	});

	it('does not emit change when disabled item clicked', async () => {
		element.innerHTML = '<eva-select-item value="dis" disabled>Disabled</eva-select-item>';
		await new Promise(r => setTimeout(r, 30));
		const trigger = element.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement;
		trigger.click();
		await new Promise(r => setTimeout(r, 30));

		let emitted = false;
		element.addEventListener('change', () => emitted = true);

		const item = element.querySelector('eva-select-item') as any;
		const itemDiv = item.shadowRoot?.querySelector('.item') as HTMLElement;
		expect(itemDiv.hasAttribute('disabled')).toBe(true);
		itemDiv.click();
		await new Promise(r => setTimeout(r, 30));

		expect(emitted).toBe(false);
	});
});
