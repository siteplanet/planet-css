import { newE2EPage } from '@stencil/core/testing';

describe('planet-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-row></planet-row>');

    const element = await page.find('planet-row');
    expect(element).toHaveClass('hydrated');
  });
});
