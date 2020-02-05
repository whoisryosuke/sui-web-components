import { newE2EPage } from '@stencil/core/testing';

describe('sui-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-link></sui-link>');

    const element = await page.find('sui-link');
    expect(element).toHaveClass('hydrated');
  });
});
