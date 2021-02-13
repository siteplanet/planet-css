import { newE2EPage } from '@stencil/core/testing';

describe('planet-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-grid></planet-grid>');

    const element = await page.find('planet-grid');
    expect(element).toHaveClass('hydrated');
  });
});
