import { newE2EPage } from '@stencil/core/testing';

describe('planet-action-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-action-bar></planet-action-bar>');

    const element = await page.find('planet-action-bar');
    expect(element).toHaveClass('hydrated');
  });
});
