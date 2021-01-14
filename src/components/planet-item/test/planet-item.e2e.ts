import { newE2EPage } from '@stencil/core/testing';

describe('planet-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-item></planet-item>');

    const element = await page.find('planet-item');
    expect(element).toHaveClass('hydrated');
  });
});
