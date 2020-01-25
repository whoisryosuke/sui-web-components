import { newE2EPage } from '@stencil/core/testing';

describe('sui-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-box></sui-box>');

    const element = await page.find('sui-box');
    expect(element).toHaveClass('hydrated');
  });
});
