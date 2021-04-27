import { newE2EPage } from '@stencil/core/testing';

describe('planet-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-tile></planet-tile>');

    const element = await page.find('planet-tile');
    expect(element).toHaveClass('hydrated');
  });
});
