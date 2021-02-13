import { newE2EPage } from '@stencil/core/testing';

describe('planet-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-pagination></planet-pagination>');

    const element = await page.find('planet-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
