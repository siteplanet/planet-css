import { newSpecPage } from '@stencil/core/testing';
import { PlanetWrapper } from '../wrapper';

describe('planet-wrapper', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PlanetWrapper],
      html: '<planet-wrapper></planet-wrapper>',
    });
    expect(root).toEqualHtml(`
      <planet-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-wrapper>
    `);
  });

  it('renders with content', async () => {
    const { root } = await newSpecPage({
      components: [PlanetWrapper],
      html: '<planet-wrapper>Content</planet-wrapper>',
    });
    expect(root).toEqualHtml(`
      <planet-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Content
      </planet-wrapper>
    `);
  });
});
