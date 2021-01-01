import { newE2EPage } from '@stencil/core/testing';

describe('planet-overlay-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-overlay-navigation></planet-overlay-navigation>');

    const element = await page.find('planet-overlay-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
