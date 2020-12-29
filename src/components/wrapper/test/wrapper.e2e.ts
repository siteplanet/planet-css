import { newE2EPage } from '@stencil/core/testing';

describe('planet-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<planet-wrapper></planet-wrapper>');
    const element = await page.find('planet-wrapper');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<planet-wrapper>Content</planet-wrapper>');
    const component = await page.find('planet-wrapper');
    expect(component.textContent).toEqual(`Content`);
  });
});
