import { newE2EPage } from '@stencil/core/testing';

describe('planet-frameset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-frameset></planet-frameset>');

    const element = await page.find('planet-frameset');
    expect(element).toHaveClass('hydrated');
  });
});
