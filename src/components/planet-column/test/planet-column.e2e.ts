import { newE2EPage } from '@stencil/core/testing';

describe('planet-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-column></planet-column>');

    const element = await page.find('planet-column');
    expect(element).toHaveClass('hydrated');
  });
});
