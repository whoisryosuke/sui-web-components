import { newE2EPage } from '@stencil/core/testing';

describe('sui-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-select></sui-select>');

    const element = await page.find('sui-select');
    expect(element).toHaveClass('hydrated');
  });
});
