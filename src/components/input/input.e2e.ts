import { newE2EPage } from '@stencil/core/testing';

describe('sui-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-input></sui-input>');

    const element = await page.find('sui-input');
    expect(element).toHaveClass('hydrated');
  });
});
