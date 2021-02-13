import { newE2EPage } from '@stencil/core/testing';

describe('planet-grid-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-grid-header></planet-grid-header>');

    const element = await page.find('planet-grid-header');
    expect(element).toHaveClass('hydrated');
  });
});
