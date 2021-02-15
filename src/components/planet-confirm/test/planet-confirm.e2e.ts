import { newE2EPage } from '@stencil/core/testing';

describe('planet-confirm', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-confirm></planet-confirm>');

    const element = await page.find('planet-confirm');
    expect(element).toHaveClass('hydrated');
  });
});
