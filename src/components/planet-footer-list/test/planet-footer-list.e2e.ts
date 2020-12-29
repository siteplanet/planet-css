import { newE2EPage } from '@stencil/core/testing';

describe('planet-footer-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-footer-list></planet-footer-list>');

    const element = await page.find('planet-footer-list');
    expect(element).toHaveClass('hydrated');
  });
});
