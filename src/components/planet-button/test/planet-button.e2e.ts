import { newE2EPage } from '@stencil/core/testing';

describe('planet-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-button></planet-button>');

    const element = await page.find('planet-button');
    expect(element).toHaveClass('hydrated');
  });
});
