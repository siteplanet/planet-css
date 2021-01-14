import { newE2EPage } from '@stencil/core/testing';

describe('planet-card-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-card-content></planet-card-content>');

    const element = await page.find('planet-card-content');
    expect(element).toHaveClass('hydrated');
  });
});
