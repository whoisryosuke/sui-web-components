import { newE2EPage } from '@stencil/core/testing';

describe('sui-base', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-base></sui-base>');

    const element = await page.find('sui-base');
    expect(element).toHaveClass('hydrated');
  });
});
