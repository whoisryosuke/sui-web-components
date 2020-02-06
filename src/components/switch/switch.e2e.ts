import { newE2EPage } from '@stencil/core/testing';

describe('sui-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-switch></sui-switch>');

    const element = await page.find('sui-switch');
    expect(element).toHaveClass('hydrated');
  });
});
