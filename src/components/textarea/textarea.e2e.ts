import { newE2EPage } from '@stencil/core/testing';

describe('sui-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sui-textarea></sui-textarea>');

    const element = await page.find('sui-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
