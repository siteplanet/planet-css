import { newE2EPage } from '@stencil/core/testing';

describe('planet-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-modal></planet-modal>');

    const element = await page.find('planet-modal');
    expect(element).toHaveClass('hydrated');
  });
});
