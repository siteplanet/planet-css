import { newE2EPage } from '@stencil/core/testing';

describe('planet-title-of-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-title-of-page></planet-title-of-page>');

    const element = await page.find('planet-title-of-page');
    expect(element).toHaveClass('hydrated');
  });
});
