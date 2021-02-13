import { newSpecPage } from '@stencil/core/testing';
import { PlanetGrid } from '../planet-grid';

describe('planet-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlanetGrid],
      html: `<planet-grid></planet-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <planet-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </planet-grid>
    `);
  });
});
