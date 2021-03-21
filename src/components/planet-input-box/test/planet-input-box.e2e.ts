import { newE2EPage } from '@stencil/core/testing';

describe('planet-input-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-input-box></planet-input-box>');

    const element = await page.find('planet-input-box');
    expect(element).toHaveClass('hydrated');
  });
});
