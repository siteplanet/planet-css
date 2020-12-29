import { newE2EPage } from '@stencil/core/testing';

describe('copyright-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-copyright-bar></planet-copyright-bar>');

    const element = await page.find('planet-copyright-bar');
    expect(element).toHaveClass('hydrated');
  });
});
