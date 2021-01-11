import { newE2EPage } from '@stencil/core/testing';

describe('planet-cover-of-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-cover-of-page></planet-cover-of-page>');

    const element = await page.find('planet-cover-of-page');
    expect(element).toHaveClass('hydrated');
  });
});
