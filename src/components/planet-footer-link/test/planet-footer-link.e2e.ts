import { newE2EPage } from '@stencil/core/testing';

describe('planet-footer-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-footer-link></planet-footer-link>');

    const element = await page.find('planet-footer-link');
    expect(element).toHaveClass('hydrated');
  });
});
