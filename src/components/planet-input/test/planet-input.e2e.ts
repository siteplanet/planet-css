import { newE2EPage } from '@stencil/core/testing';

describe('planet-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-input></planet-input>');

    const element = await page.find('planet-input');
    expect(element).toHaveClass('hydrated');
  });
});
