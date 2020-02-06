import { newE2EPage } from '@stencil/core/testing';

describe('sui-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-radio></sui-radio>');

    const element = await page.find('sui-radio');
    expect(element).toHaveClass('hydrated');
  });
});
