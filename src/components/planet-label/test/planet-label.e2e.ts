import { newE2EPage } from '@stencil/core/testing';

describe('planet-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-label></planet-label>');

    const element = await page.find('planet-label');
    expect(element).toHaveClass('hydrated');
  });
});
