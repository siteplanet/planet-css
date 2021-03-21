import { newE2EPage } from '@stencil/core/testing';

describe('planet-form-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-form-section></planet-form-section>');

    const element = await page.find('planet-form-section');
    expect(element).toHaveClass('hydrated');
  });
});
