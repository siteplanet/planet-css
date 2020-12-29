import { newE2EPage } from '@stencil/core/testing';

describe('planet-title-of-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-title-of-group></planet-title-of-group>');

    const element = await page.find('planet-title-of-group');
    expect(element).toHaveClass('hydrated');
  });
});
