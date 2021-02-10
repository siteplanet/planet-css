import { newE2EPage } from '@stencil/core/testing';

describe('planet-validation-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-validation-message></planet-validation-message>');

    const element = await page.find('planet-validation-message');
    expect(element).toHaveClass('hydrated');
  });
});
