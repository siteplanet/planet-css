import { newE2EPage } from '@stencil/core/testing';

describe('planet-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-button-group></planet-button-group>');

    const element = await page.find('planet-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
