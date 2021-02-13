import { newE2EPage } from '@stencil/core/testing';

describe('planet-crud', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<planet-crud></planet-crud>');

    const element = await page.find('planet-crud');
    expect(element).toHaveClass('hydrated');
  });
});
