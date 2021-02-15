import { newE2EPage } from '@stencil/core/testing';

describe('planet-backdrop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-backdrop></planet-backdrop>');

    const element = await page.find('planet-backdrop');
    expect(element).toHaveClass('hydrated');
  });
});
