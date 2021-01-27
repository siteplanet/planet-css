import { newE2EPage } from '@stencil/core/testing';

describe('planet-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-page></planet-page>');

    const element = await page.find('planet-page');
    expect(element).toHaveClass('hydrated');
  });
});
