import { newE2EPage } from '@stencil/core/testing';

describe('planet-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-card></planet-card>');

    const element = await page.find('planet-card');
    expect(element).toHaveClass('hydrated');
  });
});
