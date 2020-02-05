import { newE2EPage } from '@stencil/core/testing';

describe('sui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-text></sui-text>');

    const element = await page.find('sui-text');
    expect(element).toHaveClass('hydrated');
  });
});
