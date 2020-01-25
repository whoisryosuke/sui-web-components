import { newE2EPage } from '@stencil/core/testing';

describe('sui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-button></sui-button>');

    const element = await page.find('sui-button');
    expect(element).toHaveClass('hydrated');
  });
});
