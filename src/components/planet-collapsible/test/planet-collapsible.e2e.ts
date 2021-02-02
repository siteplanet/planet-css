import { newE2EPage } from '@stencil/core/testing';

describe('planet-collapsible', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-collapsible></planet-collapsible>');

    const element = await page.find('planet-collapsible');
    expect(element).toHaveClass('hydrated');
  });
});
