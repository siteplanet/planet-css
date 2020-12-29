import { newE2EPage } from '@stencil/core/testing';

describe('planet-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-footer></planet-footer>');

    const element = await page.find('planet-footer');
    expect(element).toHaveClass('hydrated');
  });
});
